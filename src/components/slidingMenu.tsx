const SlidingMenu = () => {
  return (
    <div className="grid grid-cols-4 gap-4 p-4 bg-gray-100">
      <div className="bg-red-200 p-2">Item 1</div>
      <div className="bg-green-200 p-2">Item 2</div>
      <div className="bg-blue-200 p-2">Item 3</div>
      <div className="bg-yellow-200 p-2">Item 4</div>

      {/* এটা একটি nested grid যেখানে আমরা চান Subgrid behaviour: */}
      <div className="col-span-3 grid grid-cols-subgrid gap-4 bg-white p-4 border">
        <div className="bg-purple-200 p-2">Nested A</div>
        <div className="bg-pink-200 p-2">Nested B</div>
        <div className="bg-indigo-200 p-2">Nested C</div>
        <div className="bg-teal-200 p-2">Nested D</div>
      </div>
    </div>
  );
};

export default SlidingMenu;
