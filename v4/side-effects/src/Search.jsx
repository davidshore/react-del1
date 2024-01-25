// const props = {
//   onSearch: handleSearchTerm,
//   hello: "hej"
// }

const user = {
  firstName: "Robin",
  pet: {
    name: "Trixi",
  },
};

// Nested destructuring
const {
  firstName,
  pet: { name },
} = user;

// const name = pet.name;

// const name = user.pet.name;

console.log("pet's name is:", name);

export default function Search({ onSearch, searchTerm }) {
  // const onSearch = props.onSearch;
  // const searchTerm = props.searchTerm;
  // const { onSearch, searchTerm } = props;

  return (
    <>
      <label htmlFor="search">Search: </label>
      <input
        value={searchTerm}
        placeholder="Search here"
        id="search"
        onChange={onSearch}
        type="text"
      />
    </>
  );
}
