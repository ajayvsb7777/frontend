{
  "nbformat": 4,
  "nbformat_minor": 0,
  "metadata": {
    "colab": {
      "provenance": []
    },
    "kernelspec": {
      "name": "python3",
      "display_name": "Python 3"
    },
    "language_info": {
      "name": "python"
    }
  },
  "cells": [
    {
      "cell_type": "code",
      "source": [
        "(function() {\n",
        "\n",
        "  var loginController = function($scope, $location, $mdDialog, $mdToast, $window, userFactory) {\n",
        "\n",
        "    $scope.username = this.username;\n",
        "    $scope.password = this.password;\n",
        "\n",
        "    //Error dialog\n",
        "    $scope.showAlert = function() {\n",
        "    $mdDialog.show(\n",
        "      $mdDialog.alert()\n",
        "        .clickOutsideToClose(false)\n",
        "        .title('Error')\n",
        "        .textContent('There is a network error. Check your connection.')\n",
        "        .ariaLabel('Error dialog')\n",
        "        .ok('Ok')\n",
        "      );\n",
        "    };\n",
        "\n",
        "    //Login function\n",
        "    $scope.authenticate = function() {\n",
        "      userFactory.authenticate($scope.username, $scope.password)\n",
        "        .success(function(response) {\n",
        "          if(response.success) { //authentication successful\n",
        "            //Save the returned JSON web token into the sessionStorage\n",
        "            $window.sessionStorage.token = response.token;\n",
        "            //Save the returned user ID into the sessionStorage\n",
        "            $window.sessionStorage.userID = response.user._id;\n",
        "            //Save the username\n",
        "            $window.sessionStorage.username = response.user.username;\n",
        "            //Save the email\n",
        "            $window.sessionStorage.email = response.user.email;\n",
        "            //Go to kanban application\n",
        "            $location.path('/kanban');\n",
        "          } else { //authentication error\n",
        "            $mdToast.show($mdToast.simple().textContent(\"Error: \" + response.message));\n",
        "          }\n",
        "        })\n",
        "        .error(function(response, status) {\n",
        "          $scope.showAlert();\n",
        "        });\n",
        "    };\n",
        "\n",
        "    //Switch to register page\n",
        "    $scope.goRegister = function() {\n",
        "      $location.path('/register');\n",
        "    };\n",
        "\n",
        "  };\n",
        "\n",
        "  loginController.$inject = ['$scope', '$location', '$mdDialog', '$mdToast', '$window', 'userFactory'];\n",
        "\n",
        "  angular.module('kanban-board')\n",
        "    .controller('loginController', loginController);\n",
        "\n",
        "}());"
      ],
      "metadata": {
        "id": "SWzrAs2-0TUJ"
      },
      "execution_count": null,
      "outputs": []
    }
  ]
}