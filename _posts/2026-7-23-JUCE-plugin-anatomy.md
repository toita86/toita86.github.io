---
layout: post
title: "The Anatomy of an Audio Plugin"
date: 2026-7-23
categories: [audio, devlog]
---

## Prologue
I'm starting the third semester of my master's at Aalborg University, and one of the next projects that I need to work on involves the use of JUCE.
After setting up the toolchain and the development environment, I finally got into the guts of plugin development and how it works.

My learning started by following the course provided by [WolfSound](https://www.wolfsoundacademy.com/products/official-juce-audio-plugin-development-course). The bite-sized lectures really help to digest the concepts. It is worth saying that the course is focused on the implementation of an effect plugin, while I need to implement a synth that produces audio/MIDI(I have not decided yet).


## Understanding the JUCE Plugin Lifecycle

While following the course, I realized that an audio plugin is composed by two responsibilities:

* **Processor**: Handles audio processing and communication with the host.
* **Editor**: Handles the user interface.

The interesting part is that Processor can exists without the Editor but not viceversa. A DAW can load and process audio through a plugin even if the plugin's window is never opened. Because of that, any important **audio related state** should live in the processor, not the editor.

### How the Host Interacts with a Plugin

From my understanding, the typical flow looks something like this:

1. The host creates the plugin instance.
2. `prepareToPlay()` is called, providing the sample rate and expected buffer size(which may not be respected later).
3. `processBlock()` gets called repeatedly to process audio.
4. When playback stops or the plugin is unloaded, `releaseResources()` is called.
5. If the user deletes the plugin, the processor is destroyed.

One thing that stood out to me is that hosts don't always behave perfectly. Even though they provide an expected buffer size, plugins should still be prepared for unexpected inputs with what _WolfSound_ describes as defensive programming.

### A Note About Real-Time Audio

The biggest takeaway from this lesson is that `processBlock()` runs under strict timing constraints. Audio processing must finish before the next buffer is needed, otherwise glitches can occur. This means that no costly operations should be run in this block like memory management operations

### Editor Lifecycle

The editor has a much looser lifecycle than the processor. Users can open and close the GUI whenever they want, and some hosts may even destroy and recreate the editor multiple times. The processor, however, continues running independently.

This reinforced an important design principle: the GUI should reflect the processor's state rather than own it.

## Wrapping up

The most important thing I learned from this lesson is that audio plugins are not just DSP code. A large part of plugin development is understanding how the host interacts with the processor and designing around it.