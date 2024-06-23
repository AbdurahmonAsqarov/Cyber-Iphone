    import React, { useContext,useState}  from 'react'
    import { UserContext } from '../context/Context';
    import { NavLink } from 'react-router-dom';
    // Css
    import "./Card.css"
    // React icons
    import { IoIosHeartEmpty } from "react-icons/io";
    import { IoMdHeart } from "react-icons/io";
    const Cards = () => {
        const {product,product2,product3,setCard} = useContext(UserContext);


        const [likedItems, setLikedItems] = useState([]);

    const handleLikeToggle = (itemId) => {
        if (likedItems.includes(itemId)) {
            setLikedItems(likedItems.filter(id => id !== itemId));
        } else {
            setLikedItems([...likedItems, itemId]);
        }
    };
    return (
        <div className='container'>
        
        <div className=' p-7 ml-[60px] mt-10  cards grid grid-cols-4 gap-[50px]'>
        {
            product?.map((item)=>(
                <div key={item.id} className="w-[268px] h-[480px] text-center border-none   bg-[#d3d3d3]  border-2 rounded-xl ">
                <div className="card_img">
                    {likedItems.includes(item.id) ? (
                                <IoMdHeart className='ml-[210px] mt-[10px] text-4xl text-[#FF0000]' onClick={() => handleLikeToggle(item.id)}/>
                                ) : (
                                <IoIosHeartEmpty className=' ml-[210px] mt-[10px] text-4xl text-[#000] cursor-pointer' onClick={() => handleLikeToggle(item.id)}/>
                            )}
                    <img className='w-[160px] h-[160px] rounded-xl ml-[40px] hover:mt-[50px]' src={item.img } alt="" />
                </div>
                <div className="  py-[10px] text-center">
                    <h2 className='my-2 mt-[30px] text-xl font-bold'>{item.title.slice(0,20)}... </h2>
                    <h1 className='text-[15px] text-[30px] mt-[20px] mb-[30px] font-bold'>{item.price}</h1>   
                </div>
                <NavLink to="/ProductPage" onClick={() => setCard(item) } className='text-white bg-[#000] hover:bg-[#222933] mt-[px] py-[20px] px-[40px] rounded-lg mx-4'>Shop now</NavLink>
            </div>
            ))
        }
    </div>  


    <div className='cards  grid grid-cols-4 item-center jud '>
        {
            product3?.map((item)=>(
                <div className={`card-${item.id}`}>
                    <div key={item.id}  className=" flex-col text-center border-none p-3 border-2 rounded-xl ">
                    <div className="card_img min-h-[65%]">
                        
                        <img className=' rounded-xl' src={item.img} alt="" />
                    </div>
                    <div className="card_body px-[20px] mt-[50px] py-[10px]">
                        <h1 className='text-2xl   font-bold'>{item.price}</h1>
                        <h2 className='my-2 text-[10PX]'>{item.title} </h2>
                      
                    </div>
                    <div >
                    <NavLink to="/ProductPage" onClick={()=>setCard(item)} className='text-black border-2  border-black bg-[#fff] py-[20px] px-[60px] my-[50px] hover:text-xl hover:shadow-2xl mt-[px] py-2 px-7 rounded-lg mx-4'
                    >Shop now</NavLink>
                    </div>
                </div>
                </div>
            ))  
        }


    </div>

    <div className=' p-7 mx-[70px] mt-10 gap-[50px]   grid grid-cols-4'>
        {
            product2?.map((item)=>(
                <div key={item.id} className="w-[268px] h-[480px] text-center border-none   bg-[#d3d3d3]  border-2 rounded-xl ">
                    <div className="card_img">
                    {likedItems.includes(item.id) ? (
                                <IoMdHeart className='ml-[210px] mt-[10px] text-4xl text-[#FF0000]' onClick={() => handleLikeToggle(item.id)}/>
                                ) : (
                                <IoIosHeartEmpty className=' ml-[210px] mt-[10px] text-4xl text-[#000] cursor-pointer' onClick={() => handleLikeToggle(item.id)}/>
                            )}
                        <img className='w-[160px] h-[160px] rounded-xl ml-[40px] hover:mt-[50px]' src={item.img} alt="" />
                    </div>
                    <div className="  py-[10px] text-center">
                        <h2 className='my-2 mt-[30px] text-xl font-bold'>{item.title.slice(0,20)}... </h2>
                        <h1 className='text-[15px] text-[30px] mt-[20px] mb-[30px] font-bold'>{item.price}</h1>   
                    </div>
                    <NavLink to="/ProductPage" onClick={() => setCard(item) } className='text-white bg-[#000] hover:bg-[#222933] mt-[px] py-[20px] px-[40px] rounded-lg mx-4'>Shop now</NavLink>
                </div>
            ))
        }
    </div>


        </div>
    )
    }

    export default Cards