import Category from "@/components/Category";

const categories = ["All", "Electronics", "Clothing", "Home"];

export default function Home() {
  return (
    <div className="flex justify-center min-h-full text-white">
      <aside className="">
        <div className="bg-blue-800 rounded-lg p-4 ">
          <h2 className="font-bold text-2xl pb-3">Filters</h2>
          <h3 className="font-semibold">Category</h3>
          <Category
            type={{ type: "slider", text: "light" }}
            categories={categories}
          />
        </div>
        <div>
          <h3>Category</h3>
          <Category
            categories={categories}
          />
        </div>
      </aside>
      <section className="bg-amber-500">PRODUCTS LISTING</section>
    </div>
  );
}
