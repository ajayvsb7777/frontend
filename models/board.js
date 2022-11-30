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
        "// set up the kanban board model\n",
        "// every kanban board below to an user\n",
        "var BoardSchema = new Schema({\n",
        "\tname: { type: String },\n",
        "  description: { type: String },\n",
        "  cards: [ { type: Schema.Types.ObjectId, ref: 'card' } ],\n",
        "  owners: [ { type: Schema.Types.ObjectId, ref: 'user' } ]\n",
        "});\n",
        "\n",
        "module.exports = mongoose.model('board', BoardSchema);"
      ]
    }
  ]
}