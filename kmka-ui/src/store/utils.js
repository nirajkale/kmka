export function prepareURL(baseUrl, options) {
    let offset = (options.page - 1) * options.itemsPerPage;
    if (!isNaN(options.itemsPerPage)) baseUrl += `&limit=${options.itemsPerPage}`
    if (!isNaN(offset)) baseUrl += `&offset=${offset}`
    if (options.sortBy != null && options.sortBy.length > 0) {
        let sortByColumn = options.sortBy[0];
        sortByColumn = sortByColumn.replace('_uri.', '__');
        if (options.sortDesc[0])
            baseUrl += `&ordering=-${sortByColumn}`;
        else
            baseUrl += `&ordering=${sortByColumn}`;
    }
    if (options.search != null && options.search.length > 0) {
        baseUrl += `&search=${options.search}`;
    }
    if (options.type != null && options.type.length > 0) {
        baseUrl += `&type=${options.type}`;
    }
    if (baseUrl[baseUrl.length - 1] == '?') baseUrl = baseUrl.slice(0, baseUrl.length - 1);
    return baseUrl
}