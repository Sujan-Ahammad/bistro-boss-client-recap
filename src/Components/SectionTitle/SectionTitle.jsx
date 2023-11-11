
const SectionTitle = ({title,subTitle}) => {
    return (
        <div className="md:w-4/12 mx-auto text-center my-8">
            <p className="text-yellow-400 mb-2">--- {subTitle} ---</p>
            <h1 className="text-3xl uppercase border-y-2 border-gray-400 text-black py-3">{title}</h1>
        </div>
    );
};

export default SectionTitle;