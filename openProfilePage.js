 openProfilePage = {
    userProfiles: [],
    profileIndex : 0,
    getLinksFromStorage: function() {
        let that = this;
        chrome.storage.local.get('profileLinks', function (profiles) {
            that.userProfiles = profiles;
        });
    },
    openTabs: function() {
        chrome.tabs.create({active: true, url: this.userProfiles[this.profileIndex] }, function () {

        });
        //execute profilr info script
        // incrementProfileIndexs
    },

    incrementProfileIndex: function () {
        return this.profileIndex++;
    },
    decrementProfileIndex: function () {
        return this.profileIndex--;
    },
}