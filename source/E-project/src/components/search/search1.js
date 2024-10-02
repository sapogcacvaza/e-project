import { useParams } from "react-router-dom";
import Search2 from "./search2";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Search1() {
    const { name } = useParams();
    const [cats, setCats] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [openCategory, setOpenCategory] = useState(null);
    const navigate = useNavigate();
    const [sortOrder, setSortOrder] = useState("");

    const fetchData = async () => {
        const categoriesRes = await fetch('http://localhost:3001/categories');
        const categoriesData = await categoriesRes.json();

        const transformedCategories = Object.keys(categoriesData).map(categoryKey => ({
            name: categoryKey,
            products: categoriesData[categoryKey]
        }));
        setCats(transformedCategories);
    };

    const handleSortChange = (event) => {
        setSortOrder(event.target.value);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleCategoryClick = (category) => {
        if (category === "All") {
            setSelectedCategory("All");
            const searchKeyword = localStorage.getItem('searchKeyword') || '';
            navigate(`/search?query=${encodeURIComponent(searchKeyword)}`);
        } else {
            setOpenCategory(openCategory === category ? null : category);
            setSelectedCategory("All");
        }
    };

    const handleSubCategoryClick = (subCategoryId) => {
        const searchKeyword = localStorage.getItem('searchKeyword') || '';
        navigate(`/search?query=${encodeURIComponent(searchKeyword)}&category=${subCategoryId}`);
    };

    return (
        <>
            <div className="container-fluid fruite py-5">
                <div className="container py-5">
                    <div className="row g-4 py-6">
                        <div className="col-lg-12 py-6">
                            <div className="row g-4">
                                <div className="col-lg-12">
                                    <div className="row g-4 justify-content-center">
                                        <Search2 name={name} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
