angular.module('starter.services', [])

.service('Company', ['$http', '$q', function ($http, $q) {
    var url = "https://api.myjson.com/bins/2ggcs"

    var companies = []
    this.getCompanies = function () {
        var q = $q.defer()
        $http.get(url).success(function (data, status) {
            companies = data
            q.resolve(data)
        }).error(function (data, status) {
            q.reject(data)
        })

        return q.promise

    }

    this.getCompany = function (id) {
        for (var i = 0, cl = companies.length; i < cl; i++) {
            if (companies[i].companyID == id)
                return companies[i]
        }
    }

    this.getCompaniesByDepartment = function (department) {
        if (department == "All") {
            return companies;
        } else {
            var filteredCompanies = []
            for (var i = 0, cl = companies.length; i < cl; i++) {
                var departments = []
                if (companies[i].companyDepartments != "")
                    departments = companies[i].companyDepartments.split(",")
                angular.forEach(departments, function (value, key) {
                    if (value == department)
                        filteredCompanies.push(companies[i])
                });
            }
            return filteredCompanies
        }
    }


}])