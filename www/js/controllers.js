angular.module('starter.controllers', [])

.controller('CompanyListCtrl', ['$scope', 'Company', function ($scope, Company) {
        $scope.departments = [
            {
                name: "All"
            },
            {
                name: "Advertising"
            },
            {
                name: "Accounting"
            }
        ]
        $scope.filterByDepartment =
            function (el) {
                $scope.companies = Company.getCompaniesByDepartment(el.selectedDepartment.name)
            }
        Company.getCompanies().then(function (data) {
            $scope.companies = data
        })

    }])
    .controller('CompanyCtrl', ['$scope', '$stateParams',
        'Company',
        function ($scope, $stateParams, Company) {
            console.log(Company.getCompany($stateParams.id))
            $scope.company = Company.getCompany($stateParams.id)

    }])