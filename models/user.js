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
        "var UserSchema = new Schema({\n",
        "\tusername: { type: String, required: true, lowercase: true, index: { unique: true } },\n",
        "\temail: { type: String, required: true, index: { unique: true } },\n",
        "\tpassword: { type: String, required: true }\n",
        "});\n",
        "\n",
        "UserSchema.pre('save', function(next) {\n",
        "\tvar user = this;\n",
        "\t//only hash the password if it has been modified (or is new)\n",
        "\tif (!user.isModified('password')) return next();\n",
        "\t//generate a salt\n",
        "\tbcrypt.genSalt(10, function(err, salt) {\n",
        "\t\tif (err) return next(err);\n",
        "\t\t//hash the password using our new salt\n",
        "\t\tbcrypt.hash(user.password, salt, function(err, hash) {\n",
        "\t\t\tif (err) return next(err);\n",
        "\t\t\t//override the cleartext password with the hashed one\n",
        "\t\t\tuser.password = hash;\n",
        "\t\t\tnext();\n",
        "\t\t});\n",
        "\t});\n",
        "});\n",
        "\n",
        "UserSchema.methods.comparePassword = function(candidatePassword, cb) {\n",
        "\tbcrypt.compare(candidatePassword, this.password, function(err, isMatch) {\n",
        "\t\tif (err) return cb(err);\n",
        "\t\tcb(null, isMatch);\n",
        "\t});\n",
        "};\n",
        "\n",
        "module.exports = mongoose.model('user', UserSchema);"
      ]
    }
  ]
}