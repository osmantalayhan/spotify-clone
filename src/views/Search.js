import categories from "data/categories"
import Title from "Components/Title"
import favoriteCategories from "data/favorite-categories"
import ScrollContainer from 'react-indiana-drag-scroll'

function Category({ category }){
    return(
        <div 
            style={{'background': category.color}}
            className="rounded-md before:pt-[100%] before:block relative"
        >
            <div className="absolute inset-0 overflow-hidden">
                <h3 className="p-4 text-[1.45rem] tracking-tighter font-semibold">
                    {category.title}
                </h3>
                <img src={category.cover} className=" shadow-spotify w-[6.25rem] h-[6.25rem] rotate-[25deg] translate-x-[18%] translate-y-[6%] absolute bottom-0 right-0" />
            </div>
        </div>
    )
}

function WideCategory({ category }){
    return(
        <div 
            style={{'background': category.color}}
            className="rounded-lg relative w-[24.29rem] h-[13.75rem] flex-shrink-0 cursor-grab"
        >
            <div className="absolute inset-0 overflow-hidden">
                <h3 className="p-4 text-[2.5rem] tracking-tighter font-bold">
                    {category.title}
                </h3>
                <img src={category.cover} className=" shadow-spotify w-32 h-32 rotate-[25deg] translate-x-[18%] translate-y-[6%] absolute bottom-0 right-0" />
            </div>
        </div>
    )
}

function Search() {
    return (
        <>
        <section className="mb-4">
            <Title title="En çok dinlediğin türler" />
            <ScrollContainer className="flex overflow-x gap-x-6">
                {favoriteCategories.map((category, index) => <WideCategory key={index} category={category} />)}
            </ScrollContainer>
        </section>
        <section>
            <Title title="Hepsine göz at" />
            <div className="grid grid-cols-6 gap-6">
                {categories.map((category, index) => <Category key={index} category={category} />)}
            </div>
        </section>
        </>
    )
}

export default Search