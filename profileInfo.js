let profileInfo = {
    init: function() {
        this.getProfileDetails();
    },
    getProfileDetails:  function() {
        let profileDetails = {
            name: this.getProfileName(this.getProfileDetailsQuery),
            connectionHierarchy: this.getProfileConnectionHierarchy(this.getProfileDetailsQuery),
            connections: this.getProfileConnectionsCount(this.getProfileDetailsQuery),
            location: this.getProfileLocation(this.getProfileDetailsQuery)
        }
        console.log(profileDetails);
    },
    getProfileDetailsQuery:  function () {
        return  document.querySelectorAll('.pv-top-card--list');
    },
    getProfileName: function (query) {
        return query()[0].querySelector('li').innerText;
    },
    getProfileConnectionHierarchy: function (query) {
        let connectionQuery = query()[0];
        return connectionQuery.querySelector('li.pv-top-card__distance-badge .distance-badge .dist-value').innerText;
    },
    getProfileConnectionsCount: function (query) {
        return query()[1].querySelector('li span.t-16').innerText;
    },
    getProfileLocation: function (query) {
        return query()[1].querySelector('li.t-16').innerText;
    },
    getProfileDesignation: function () {
       let designationQuery = document.querySelectorAll('.ph5.pb5 .display-flex.mt2 h2')[0]
        return designationQuery.innerText;
    }
}