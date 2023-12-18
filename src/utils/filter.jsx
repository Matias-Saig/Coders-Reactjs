function filter(  ) {
    const items = categoryId 
    ? data.filter(prod => prod.category === categoryId)
    : data
}

export default filter;
