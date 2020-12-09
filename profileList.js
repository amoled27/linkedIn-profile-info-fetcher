profileList = {
    init: function () {
        this.execution();
    },
    profileIndex: 0,
    profileLinks: [],
    execution: function () {
        let profilesArr = this.getSearchedProfilesArr();
        while (this.profileIndex < profilesArr.length) {
            let link = this.getLinkFromProfileData(profilesArr);
            this.profileLinks.push(link);
            this.profileIndex++;
        }
        console.log(this.profileLinks);
    },
    //get the profiles populated after searching on linked in
    getSearchedProfilesArr: function () {
         return document.querySelectorAll('ul.search-results__list li.search-result.ember-view');
    },
    getLinkFromProfileData: function (profileData) {
        return profileData[this.profileIndex].querySelector('a.search-result__result-link.ember-view').href;
    },
    incrementProfileIndex: function () {
        return this.profileIndex++;
    },
    decrementProfileIndex: function () {
        return this.profileIndex--;
    },
    addLinksToStorage: function () {
        chrome.storage.local.set({ profileLinks: this.profileLinks})
    }
}