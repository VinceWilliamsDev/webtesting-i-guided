module.exports = {
  add,
};

function add(...nums) {
    return nums.reduce((acc, curr) => acc + curr)
}
