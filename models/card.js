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
        "\n",
        "var CardSchema = new Schema({\n",
        "\tcontent: { type: String, required: true },\n",
        "  category: { type: String },\n",
        "\tboard: { type: Schema.Types.ObjectId, ref: 'board' }\n",
        "});\n",
        "\n",
        "module.exports = mongoose.model('card', CardSchema);"
      ]
    }
  ]
}