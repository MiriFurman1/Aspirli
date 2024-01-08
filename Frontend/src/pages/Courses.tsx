
const Courses = () => {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const categories = [
    {
      name: 'פיזיקה 1',
      subcategories: ['1א', '1ב', '1ג'],
    },
    {
      name: 'פיזיקה 2',
      subcategories: ['2א', '2ב', '2ג'],
    },
    {
      name: 'פיזיקה 3',
      subcategories: ['3א', '3ב', '3ג'],
    },
  ];

  const handleCategoryClick = (index:number) => {
    setExpandedCategory(expandedCategory === index ? null : index);
  };

  return (
    <section className='w-screen flex flex-col justify-center items-center mb-10 h-1/2 text-center'>
      <h2 className='text-2xl p-4'>קורסים נוספים</h2>
      {categories.map((category, index) => (
        <div key={index}>
          <div onClick={() => handleCategoryClick(index)} className='text-xl p-5 m-2 w-60 bg-slate-300 rounded'>
            {category.name}
          </div>
          {expandedCategory === index && (
            <ul>
              {category.subcategories.map((subCategory, subIndex) => (
                <li key={subIndex} className='p-2 m-2 w-60 bg-grey rounded'>
                  <a href={`#/${category.name}/${subCategory}`}>
                    {subCategory}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </section>
  );
};

export default Courses;
