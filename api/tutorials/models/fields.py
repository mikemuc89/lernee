from django.db import models


def AccountNumberField(*args, **kwargs):
    return models.CharField(max_length=32, *args, **kwargs)


def IconField(*args, **kwargs):
    return models.CharField(max_length=32, blank=True, null=True, *args, **kwargs)


def ImageField(*args, **kwargs):
    return models.URLField(blank=True, null=True, *args, **kwargs)


def InternalLinkField(*args, **kwargs):
    return models.CharField(max_length=255, blank=True, null=True, *args, **kwargs)


def ExternalLinkField(*args, **kwargs):
    return models.URLField(blank=True, null=True, *args, **kwargs)


def IdentField(*args, **kwargs):
    return models.CharField(max_length=32, *args, **kwargs)


def TitleField(*args, **kwargs):
    return models.CharField(max_length=255, *args, **kwargs)


def PhoneField(*args, **kwargs):
    return models.CharField(max_length=9, *args, **kwargs)


def NipField(*args, **kwargs):
    return models.CharField(max_length=10, *args, **kwargs)


def RegonField(*args, **kwargs):
    return models.CharField(max_length=14, *args, **kwargs)
