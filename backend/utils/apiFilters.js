class APIFilters {
  constructor(query, querySrt) {
    this.query = query;
    this.querySrt = querySrt;
  }

  search() {
    const keyword = this.querySrt.keyword
      ? {
          name: {
            $regex: this.querySrt.keyword,
            $options: "i",
          },
        }
      : {};

    this.query = this.query.find({ ...keyword });
    return this;
  }

  filters() {
    const queryCopy = { ...this.querySrt };

    //Ignorar a palavra keyword já tratada acima
    const fieldsToRemove = ["keyword", "page"];
    fieldsToRemove.forEach((el) => delete queryCopy[el]);

    //Filtro avançado para preço, nota e etc
    let querySrt = JSON.stringify(queryCopy);
    querySrt = querySrt.replace(/\b(gt|gte|lt|lte)\b/g, (match) => `$${match}`);

    this.query = this.query.find(JSON.parse(querySrt));
    return this;
  }

  pagination(resPerPage) {
    const currentPage = Number(this.querySrt.page) || 1;
    const skip = resPerPage * (currentPage - 1);

    this.query = this.query.limit(resPerPage).skip(skip);
    return this;
  }
}

export default APIFilters;
