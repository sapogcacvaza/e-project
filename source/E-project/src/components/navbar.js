import React from "react";
import { Link } from "react-router-dom"
import { useState, useRef, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

export default function Navbar() {

    const navigate = useNavigate();
    var onSearch = (event) => {
        event.preventDefault()
        var keyword = event.target.keyword.value
        navigate(`/search/?query=${keyword}`, { replace: true });
    }

    // State để quản lý việc hiển thị form tìm kiếm
    const [showSearch, setShowSearch] = useState(false);
    // Tạo ref để tham chiếu tới form và icon tìm kiếm
    const searchFormRef = useRef(null);
    const searchIconRef = useRef(null);
    // Hàm toggle để ẩn/hiển form tìm kiếm
    const toggleSearchForm = () => {
        setShowSearch(!showSearch); // Đảo ngược trạng thái hiển thị của form
    };
    // Hàm để xử lý khi click ra ngoài form tìm kiếm
    const handleClickOutside = (event) => {
        if (
            searchFormRef.current &&
            searchIconRef.current &&
            !searchFormRef.current.contains(event.target) &&
            !searchIconRef.current.contains(event.target)
        ) {
            setShowSearch(false); // Ẩn form khi click ra ngoài
        }
    };

    // Sử dụng useEffect để thêm và xóa sự kiện click
    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className="container-fluid fixed-top bg-hotgreen">
            <div className="container px-0">
                <nav className="navbar navbar-light bg-hotgreen navbar-expand-xl">
                    <Link to={'/'} className="navbar-brand"><h1 className="text-white display-6">RyanaCalendars</h1></Link>
                    <button className="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars text-white"></span>
                    </button>
                    <div className="collapse navbar-collapse bg-hotgreen" id="navbarCollapse">
                        <div className="navbar-nav mx-auto">
                            <Link to={'/'} className="nav-item nav-link text-white active">Home</Link>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Shop
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link to={'/shop'} class="dropdown-item">All</Link></li>
                                    <li><Link to={'shop/category/1'} class="dropdown-item">Calendars</Link></li>
                                    <li><Link to={'shop/category/2'} class="dropdown-item" href="#">Diaries</Link></li>
                                    <li><Link to={'shop/category/3'} class="dropdown-item" href="#">Notebook</Link></li>
                                    <li><Link to={'shop/category/4'} class="dropdown-item" href="#">Journals</Link></li>
                                </ul>
                            </li>
                            <Link to={'/contact'} className="nav-item nav-link text-white ">Contact Us</Link>
                            <Link to={'/about'} className="nav-item nav-link text-white ">Helping Communities</Link>
                        </div>
                        <div className="navbar-nav d-flex">
                            <Link to={'/'} className="nav-item nav-link text-white" style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                                <form id="search-form" ref={searchFormRef} onSubmit={onSearch} style={{ position: 'absolute', right: '50px', display: showSearch ? 'block' : 'none' }}>
                                    <input placeholder="Search" className="input" name="text" type="text" />
                                </form>

                                <i id="search-icon" onClick={toggleSearchForm} ref={searchIconRef} className="bi bi-search"></i>
                            </Link>
                            <Link to={'/login'} className="nav-item nav-link text-white "><i class="bi bi-person"></i></Link>
                            <Link to={'/'} className="nav-item nav-link text-white "><i class="bi bi-cart"></i></Link>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}