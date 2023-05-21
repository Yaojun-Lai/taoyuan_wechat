Page({
  data: {
    allFoods: [
      // add the index property to your foods
      { index: 'food0', avatar: 'path/to/avatar1.jpg', name: 'Food 1', description1: 'Description 1', description2: 'Description 2' },
      { index: 'food1', avatar: 'path/to/avatar2.jpg', name: 'Food 2', description1: 'Description 3', description2: 'Description 4' },
      { index: 'food2', avatar: 'path/to/avatar1.jpg', name: 'Food 3', description1: 'Description 1', description2: 'Description 2' },
      { index: 'food3', avatar: 'path/to/avatar2.jpg', name: 'Food 4', description1: 'Description 3', description2: 'Description 4' },
      { index: 'food4', avatar: 'path/to/avatar1.jpg', name: 'Food 5', description1: 'Description 1', description2: 'Description 2' },
      { index: 'food5', avatar: 'path/to/avatar2.jpg', name: 'Food 6', description1: 'Description 3', description2: 'Description 4' },
      { index: 'food6', avatar: 'path/to/avatar1.jpg', name: 'Food 7', description1: 'Description 1', description2: 'Description 2' },
      { index: 'food7', avatar: 'path/to/avatar2.jpg', name: 'Food 8', description1: 'Description 3', description2: 'Description 4' },
      { index: 'food8', avatar: 'path/to/avatar2.jpg', name: 'Food 9', description1: 'Description 3', description2: 'Description 4' },
      { index: 'food9', avatar: 'path/to/avatar2.jpg', name: 'Food 10', description1: 'Description 3', description2: 'Description 4' }
      // more foods...
    ],
    searchInput: '',  // variable to store the search input
    scrollToFood: '',  // variable to store the ID of the food to scroll to
  },

  onSearchButton: function() {
    console.log(this.data.searchInput)
    const foodToSearch = this.data.allFoods.find(food => food.name === this.data.searchInput);
    if (foodToSearch) {
      this.setData({
        scrollToFood: foodToSearch.index,
      });
    } else {
      // Find the first food where food.name includes the search input
      const foodToScroll = this.data.allFoods.find(food => food.name.includes(this.data.searchInput));
      if (foodToScroll) {
        this.setData({
          scrollToFood: foodToScroll.index,
        });
      } else {
        console.log("No food found with this name");
      }
    }
  },
  
  onSearchInput: function(e) {
    // store the search input in the data
    this.setData({ searchInput: e.detail.value });
  }
})
