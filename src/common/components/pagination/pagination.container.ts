export const getPaginationNumbers = (currentPage: number, total: number) => {
    const MAX_PAGINATION_NUMBERS = 5;
    if (total <= MAX_PAGINATION_NUMBERS) {
        return Array.from({ length: total }, (_, i) => i + 1);
    }
    if (currentPage <= 3) {
        return [1, 2, 3, 4, 5];
    }
    if (currentPage >= total - 2) {
        return [total - 4, total - 3, total - 2, total - 1, total];
    }
    return [currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2];
};