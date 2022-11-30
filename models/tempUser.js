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
      "execution_count": null,
      "metadata": {
        "id": "l2DR1nmIKQLY"
      },
      "outputs": [],
      "source": [
        "var mongoose = require('mongoose');\n",
        "var Schema = mongoose.Schema;\n",
        "var bcrypt = require('bcryptjs');\n",
        "\n",
        "//User schema. Defines the user params\n",
        "var TempUserSchema = new Schema({\n",
        "\tusername: { type: String, required: true, lowercase: true, index: { unique: true } },\n",
        "\temail: { type: String, required: true, index: { unique: true } },\n",
        "\tpassword: { type: String, required: true },\n",
        "  GENERATED_VERIFYING_URL: String\n",
        "});\n",
        "\n",
        "module.exports = mongoose.model('tempUser', TempUserSchema);"
      ]
    }
  ]
}