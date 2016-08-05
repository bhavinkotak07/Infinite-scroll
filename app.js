console.log('Inside app.js');
angular.module('infiniteScrollTutorial', ['infinite-scroll']).controller('infiniteScrollController', function ($scope, $http) {
            console.log('Inside Infinite scroll controller');
            $scope.users =
                    [{
                            "id": 1,
                            "first_name": "Kimberly",
                            "last_name": "Grant",
                            "email": "kgrant0@ebay.co.uk",
                            "country": "Bolivia",
                            "ip_address": "93.77.148.179"
                    },
                        {
                            "id": 2,
                            "first_name": "Elizabeth",
                            "last_name": "Lewis",
                            "email": "elewis1@so-net.ne.jp",
                            "country": "Indonesia",
                            "ip_address": "39.187.159.25"
                        },
                        {
                            "id": 3,
                            "first_name": "A",
                            "last_name": "Lewis",
                            "email": "elewis1@so-net.ne.jp",
                            "country": "Indonesia",
                            "ip_address": "39.187.159.25"
                        },
                        {
                            "id": 4,
                            "first_name": "B",
                            "last_name": "Lewis",
                            "email": "elewis1@so-net.ne.jp",
                            "country": "Indonesia",
                            "ip_address": "39.187.159.25"
                        },
                        {
                            "id": 5,
                            "first_name": "C",
                            "last_name": "Lewis",
                            "email": "elewis1@so-net.ne.jp",
                            "country": "Indonesia",
                            "ip_address": "39.187.159.25"
                        },
                        {
                            "id": 6,
                            "first_name": "D",
                            "last_name": "Lewis",
                            "email": "elewis1@so-net.ne.jp",
                            "country": "Indonesia",
                            "ip_address": "39.187.159.25"
                        },
                        {
                            "id": 7,
                            "first_name": "E",
                            "last_name": "Lewis",
                            "email": "elewis1@so-net.ne.jp",
                            "country": "Indonesia",
                            "ip_address": "39.187.159.25"
                        },
                        {
                            "id": 8,
                            "first_name": "F",
                            "last_name": "Lewis",
                            "email": "elewis1@so-net.ne.jp",
                            "country": "Indonesia",
                            "ip_address": "39.187.159.25"
                        },
                        {
                            "id": 9,
                            "first_name": "G",
                            "last_name": "Lewis",
                            "email": "elewis1@so-net.ne.jp",
                            "country": "Indonesia",
                            "ip_address": "39.187.159.25"
                        },
                        {
                            "id": 10,
                            "first_name": "H",
                            "last_name": "Lewis",
                            "email": "elewis1@so-net.ne.jp",
                            "country": "Indonesia",
                            "ip_address": "39.187.159.25"
                        },
                        {
                            "id": 11,
                            "first_name": "I",
                            "last_name": "Lewis",
                            "email": "elewis1@so-net.ne.jp",
                            "country": "Indonesia",
                            "ip_address": "39.187.159.25"
                        },
                        {
                            "id": 12,
                            "first_name": "J",
                            "last_name": "Lewis",
                            "email": "elewis1@so-net.ne.jp",
                            "country": "Indonesia",
                            "ip_address": "39.187.159.25"
                        },
                        {
                            "id": 13,
                            "first_name": "K",
                            "last_name": "Lewis",
                            "email": "elewis1@so-net.ne.jp",
                            "country": "Indonesia",
                            "ip_address": "39.187.159.25"
                        },


 
                        {
                            "id": 100,
                            "first_name": "Shawn",
                            "last_name": "Ellis",
                            "email": "sellis2r@diigo.com",
                            "country": "Portugal",
                            "ip_address": "121.250.152.235"
                        },
                    {
                        "id": 1,
                        "first_name": "Kimberly",
                        "last_name": "Grant",
                        "email": "kgrant0@ebay.co.uk",
                        "country": "Bolivia",
                        "ip_address": "93.77.148.179"
                    },
                        {
                            "id": 2,
                            "first_name": "Elizabeth",
                            "last_name": "Lewis",
                            "email": "elewis1@so-net.ne.jp",
                            "country": "Indonesia",
                            "ip_address": "39.187.159.25"
                        },
                        {
                            "id": 3,
                            "first_name": "A",
                            "last_name": "Lewis",
                            "email": "elewis1@so-net.ne.jp",
                            "country": "Indonesia",
                            "ip_address": "39.187.159.25"
                        },
                        {
                            "id": 4,
                            "first_name": "B",
                            "last_name": "Lewis",
                            "email": "elewis1@so-net.ne.jp",
                            "country": "Indonesia",
                            "ip_address": "39.187.159.25"
                        },
                        {
                            "id": 5,
                            "first_name": "C",
                            "last_name": "Lewis",
                            "email": "elewis1@so-net.ne.jp",
                            "country": "Indonesia",
                            "ip_address": "39.187.159.25"
                        },
                        {
                            "id": 6,
                            "first_name": "D",
                            "last_name": "Lewis",
                            "email": "elewis1@so-net.ne.jp",
                            "country": "Indonesia",
                            "ip_address": "39.187.159.25"
                        },
                        {
                            "id": 7,
                            "first_name": "E",
                            "last_name": "Lewis",
                            "email": "elewis1@so-net.ne.jp",
                            "country": "Indonesia",
                            "ip_address": "39.187.159.25"
                        },
                        {
                            "id": 8,
                            "first_name": "F",
                            "last_name": "Lewis",
                            "email": "elewis1@so-net.ne.jp",
                            "country": "Indonesia",
                            "ip_address": "39.187.159.25"
                        },
                        {
                            "id": 9,
                            "first_name": "G",
                            "last_name": "Lewis",
                            "email": "elewis1@so-net.ne.jp",
                            "country": "Indonesia",
                            "ip_address": "39.187.159.25"
                        },
                        {
                            "id": 10,
                            "first_name": "H",
                            "last_name": "Lewis",
                            "email": "elewis1@so-net.ne.jp",
                            "country": "Indonesia",
                            "ip_address": "39.187.159.25"
                        },
                        {
                            "id": 11,
                            "first_name": "I",
                            "last_name": "Lewis",
                            "email": "elewis1@so-net.ne.jp",
                            "country": "Indonesia",
                            "ip_address": "39.187.159.25"
                        },
                        {
                            "id": 12,
                            "first_name": "J",
                            "last_name": "Lewis",
                            "email": "elewis1@so-net.ne.jp",
                            "country": "Indonesia",
                            "ip_address": "39.187.159.25"
                        },
                        {
                            "id": 13,
                            "first_name": "K",
                            "last_name": "Lewis",
                            "email": "elewis1@so-net.ne.jp",
                            "country": "Indonesia",
                            "ip_address": "39.187.159.25"
                        },



                        {
                            "id": 100,
                            "first_name": "Shawn",
                            "last_name": "Ellis",
                            "email": "sellis2r@diigo.com",
                            "country": "Portugal",
                            "ip_address": "121.250.152.235"
                        }
                    ];
			$scope.data = $scope.users.slice(0, 5);
			$scope.getMoreData = function () {
			    console.log('Get more data function called');
				$scope.data = $scope.users.slice(0, $scope.data.length + 5);
			}
});