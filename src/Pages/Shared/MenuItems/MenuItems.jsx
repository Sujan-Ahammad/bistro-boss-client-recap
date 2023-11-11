
const MenuItems = ({item}) => {

    const {name,image,recipe,price}=item;

    return (
        <div className="flex gap-2 space-y-2 px-1 ">
            <img style={{ borderRadius:'0 200px 200px 200px'}} className="w-[90px] " src={image} alt="" />
            <div className="items-center">
                <h3>{name}-----------------------------------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-500">${price}</p>
        </div>
    );
};

export default MenuItems;