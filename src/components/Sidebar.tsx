import Category from "@/components/Category";

const categories = ["All", "Electronics", "Clothing", "Home"];

function Sidebar() {
  return (
    <aside className=" m-5 lg:m-10 space-y-6">
      <div className="bg-blue-800 rounded-lg px-5 sm:px-10 py-6 ">
        <h2 className="font-bold text-2xl pb-3 text-white">Filters</h2>
        <h3 className="font-semibold pb-3 text-white">Category</h3>
        <Category
          type={{ type: "slider", text: "light", bg: "transparent" }}
          categories={categories}
        />
      </div>
      <div className="bg-white rounded-lg px-10 py-6 text-black ">
        <h3 className="font-semibold pb-3">Category</h3>
        <Category categories={categories} type={{ bg: "light" }} />
      </div>
    </aside>
  );
}

export default Sidebar;
