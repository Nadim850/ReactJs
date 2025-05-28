function Card({ username, btnText }) {
  return (
    <div className="max-w-xs p-6 rounded-md shadow-md bg-white text-black border-2">
      <img
        src="https://images.pexels.com/photos/30698887/pexels-photo-30698887/free-photo-of-bustling-market-scene-with-textile-merchant.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        alt=""
        className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
      />
      <div className="mt-6 mb-2">
        <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
          {username}
        </span>
        <h2 className="text-xl font-semibold tracking-wide">
          Lorem ipsum dolor
        </h2>
        <button className="text-white ">{btnText}</button>
      </div>
    </div>
  );
}

export default Card;
