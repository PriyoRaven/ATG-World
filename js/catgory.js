const toggleCategory = (categoryId) => {
    const categories = document.querySelectorAll('.category-content');
  
    categories.forEach((category) => {
      category.style.display = 'none';
    });
  
    const selectedCategory = document.getElementById(categoryId);
    if (selectedCategory) {
      selectedCategory.style.display = 'block';
    }
  };
  