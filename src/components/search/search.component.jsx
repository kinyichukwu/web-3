
const Search = ({valueProp, setValueProp}) => {
  
  console.log(valueProp)
  return (
    <section id="newsletter" className="section-p1 newsletter-shop">
      <div className="form" id="shop-form">
        <input
          type="text"
          placeholder="Search"
          value={valueProp}
          onChange={(e) => setValueProp(() => e.target.value)}
        />
        <button className="normal reset-position">
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </div>
    </section>
  );
};

export default Search;
