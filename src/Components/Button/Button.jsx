

const Button = ({title}) => {
    return (
        <div className="text-center">
            <button className="btn btn-outline border-0  border-b-4   uppercase text-orange-300 hover:bg-slate-800 hover:text-orange-300">{title}</button>
        </div>
    );
};

export default Button;