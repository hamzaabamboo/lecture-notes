---
title: Introduction to Android
subject: Advanced Computer Programming
date: "2018-09-20"
---

- [Introduction](#introduction)
    - [Why Android ?](#why-android)
    - [Quick Start](#quick-start)
    - [Dalvik VM](#dalvik-vm)
    - [Java vs Android API](#java-vs-android-api)
- [App Structure](#app-structure)
    - [Project Structure](#project-structure)
        - [AndroidManifest](#androidmanifest)
        - [/src/java/...](#srcjava)
        - [res/](#res)
        - [Gradle](#gradle)
    - [Android Virtual Device (AVD)](#android-virtual-device-avd)
    - [Compliation Process](#compliation-process)
    - [Android Terminology](#android-terminology)

# Introduction

## Why Android ?

- Better, more responseive UI and consistent UX
- Greater control of widgets than a web page
- Direct interface to device hardware.

## Quick Start

- JDK
- Android SDK
- Android Studio

## Dalvik VM

- Slow cpu, low-ram, low-power
- runs .dex files
- Multiple instances of DVM can run in parallel

## Java vs Android API

- Can use almost everything java
- Multithreading as time slicing.
- Suplots reflexion and filnalizer but not recommended
- Cannot use applet stuff: awt, rmi, applet...

# App Structure

## Project Structure

### AndroidManifest

- Everything about app is stored here
- Themes, Styles, Icons...
- Activity

### /src/java/...

- Source code for your Java classes

### res/

- Resource Files

### Gradle

- Where magic happens
- Build/Compile management system
- **build.gradle** main config files

## Android Virtual Device (AVD)

- Allow you to run your project in an emulator
  - Software simulation of Android Device
  - Run and debug application in it
- Must setup virtual device in Android studio
- You can also run on your on Android Device

## Compliation Process

- Magic....
- SourceCode -> Complied Java -> Java byte code -> cross compile to dalvik -> dalvik byte code -> Build & sign apk
- ResourceFiles -> AAPT (Asset Packaging tool) -> Complied Resources -> Build & sign apk
- Build & sign apk -> Android Package (.apk file) -> Install .apk & run

## Android Terminology

- Activity: a single screen of UI that appears in your app
  - Fundamental unit of GUI in android APP
- View: Item that appears on screen in an activity
  - widget: GUI control such as button or text field
  - layout: invisible container that manages positions/sizes of widgets
- Event: action that occurs when user interacts with widgets
  - eg. clicks, typing, scrolling
- Action bar: a menu oc common acitons at top of app
- Notification area: topmost system menu and icons
