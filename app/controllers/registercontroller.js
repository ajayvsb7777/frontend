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
        "  var registerController = function($scope, $location, $mdDialog, $mdToast, $window, userFactory) {\n",
        "\n",
        "    $scope.username = this.username;\n",
        "    $scope.password = this.password;\n",
        "    $scope.email = this.email;\n",
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
        "    //Register function\n",
        "    $scope.register = function() {\n",
        "      userFactory.register($scope.username, $scope.email, $scope.password)\n",
        "        .success(function(response) {\n",
        "          if(response.success) { //User registered\n",
        "            //Show a message to activate the user account\n",
        "            $mdToast.show($mdToast.simple()\n",
        "            .textContent(\"We have sent you an email to activate your Taskban account\")\n",
        "            .action('Ok')\n",
        "            .highlightAction(true)\n",
        "            .highlightClass('md-accent'));\n",
        "          } else { //register error\n",
        "            $mdToast.show($mdToast.simple().textContent(\"Error: \" + response.message));\n",
        "          }\n",
        "        })\n",
        "        .error(function(response, status) {\n",
        "          $scope.showAlert();\n",
        "        });\n",
        "    };\n",
        "\n",
        "    //Switch to login page\n",
        "    $scope.goLogin = function() {\n",
        "      $location.path('/login');\n",
        "    };\n",
        "\n",
        "  };\n",
        "\n",
        "  registerController.$inject = ['$scope', '$location', '$mdDialog', '$mdToast', '$window', 'userFactory'];\n",
        "\n",
        "  angular.module('kanban-board')\n",
        "    .controller('registerController', registerController);\n",
        "\n",
        "}());"
      ],
      "metadata": {
        "id": "bwDX29fizvya"
      },
      "execution_count": null,
      "outputs": []
    }
  ]
}