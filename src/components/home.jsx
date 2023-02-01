import React, { useState, useEffect } from "react";
import Pagination from "./pagination";
import Prodimages from "./prodimages";
import "./home.css"
const Home = () => {
    const [prodata, setProdata] = useState([])
    const [currentPage, setCurrentpage] = useState(1);
    const [category, setcategory] = useState([])
    const [postsperpage] = useState(10);
    const [state, setState] = useState(true);
    const lastpageindex = currentPage * postsperpage;
    const firstpageindex = lastpageindex - postsperpage;
    useEffect(() => {
        const url = 'https://dummyjson.com/products';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '2b9fea532cmshe2e329228518a6dp1d3ee4jsnfc8dc458f2bc',
                'X-RapidAPI-Host': 'real-time-product-search.p.rapidapi.com'
            }
        };
        fetch(url, options)
            .then(res => res.json())
            .then((res) => {
                //console.log(res.products[0]);
                setProdata(res.products.sort((a, b) => b.rating - a.rating));
            })
            .catch(err => console.error('error:' + err));
    }, [])

    const currentdata = prodata.slice(firstpageindex, lastpageindex)
    const paginate = (pagenumber) => {
        setCurrentpage(pagenumber);
    }
    const hadlechange = (e) => {
        console.log(e.target.value)
        if (e.target.value !== "all") {
            const categorydata = prodata.filter((item) => {
                return item.category.includes(e.target.value)
            })
            setcategory(categorydata)
        }
        else {
            setcategory([])
        }
    }
    return (
        <>
            <div className="heading">
                <h1>Available Products</h1>
            </div>
            <div className="dragdown">
                <select onChange={(e) => { hadlechange(e) }}>
                    <option value="all">All</option>
                    <option value="smartphones">Smartphones</option>
                    <option value="laptops">Laptops</option>
                    <option value="fragrances">Fragrance</option>
                    <option value="skincare">Skincare</option>
                    <option value="groceries">Groceries</option>
                    <option value="home-decoration">Home-Decoration</option>
                </select>
            </div>
            <div className="images">
                {category.length ? (category.map((post) => {
                    return (
                        <img src={post.images[0]} alt="#img" style={{ width: "250px", height: "250px" }} />
                    )
                })):<><Prodimages posts={currentdata} />
                    <Pagination perpageimages={postsperpage}
                        totalposts={prodata.length}
                        paginate={paginate} />
                </>}

            </div>
        </>
    )
}
export default Home;