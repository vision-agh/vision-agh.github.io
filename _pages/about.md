---
layout: about
title: About
permalink: /
subtitle: Computer Vision Laboratory · Department of Automatic Control and Robotics · Faculty of Electrical Engineering, Automatics, Computer Science and Biomedical Engineering · AGH University of Krakow, Poland

# main page sections (see _layouts/about.liquid)
hero_title: Embedded Perception & <b>Autonomous Systems</b>
hero_buttons:
  - label: Our research
    url: "#research"
  - label: Publications
    url: /publications/
  - label: Theses for students
    url: /students/

research_areas:
  - icon: fa-solid fa-video
    title: Computer vision
    subtitle: "4K video processing, object detection and tracking"
    text: "Real-time pipelines for high-resolution video, combining classical vision algorithms with deep networks."
  - icon: fa-solid fa-eye
    title: Event-based vision
    subtitle: "Low-latency perception with event cameras"
    text: "Perception with event cameras (DVS): filtering, visual odometry, tracking and detection from sparse, microsecond-latency event streams."
  - icon: fa-solid fa-brain
    title: Neuromorphic computing
    subtitle: "SNNs, event-based audio, neuromorphic control"
    text: "Spiking Neural Networks, event-based audio processing and neuromorphic control for advanced mobile robotics."
  - icon: fa-solid fa-diagram-project
    title: Embedded AI
    subtitle: "CNNs and GNNs for real-time, low-power inference"
    text: "Deep neural networks, including Graph Neural Networks for sparse data, compressed and optimised for on-device deployment."
  - icon: fa-solid fa-microchip
    title: Hardware acceleration
    subtitle: "FPGA, SoC FPGA and embedded GPUs"
    text: "Zynq, Zynq UltraScale+, Versal, NVIDIA Jetson and emerging neuromorphic hardware."
  - icon: fa-solid fa-helicopter
    title: Autonomous drones
    subtitle: "perception and control (classical, MPC, RL)"
    text: "Perception: detection, tracking and visual navigation. Control: classical, MPC, RL and hybrid controllers."
news_limit: 5

# rows of the team grid (member `group` values); the group leader is shown in the header
team_rows:
  - title: Research & Teaching Staff
    groups: [Principal Investigators, Research Assistants]
  - title: PhD Students & Engineers
    groups: [PhD Students, Lab Engineers]

join_us:
  title: AGH AVADER Student Research Group
  text: >-
    We supervise AGH AVADER, a student research group with four sections – Drones, FPGA, Neuromorphic and Media.
    Its members build real robotic systems, take part in international competitions and often turn their projects
    into bachelor's and master's theses.
  button: Join AVADER
  url: https://www.avader.agh.edu.pl/
  logo: assets/img/agh_avader_logo_sq_small.png

# short text and keywords in the header; the full description below is shown in an "About us" section only with show_about: true
show_about: false
hero_lead: Our research focuses on **embedded perception systems** that process, in real time and at low power, high-resolution video streams, LiDAR point clouds and data from event cameras – for autonomous mobile robots, including UAVs, UGVs and legged robots.
about_keywords:
  - Embedded perception & control
  - SoC FPGA acceleration
  - Event-based perception
  - Neuromorphic computing
  - Autonomous mobile robotics
  - Real-time edge AI
---

Welcome to the Embedded Perception and Autonomous Systems (EPAS) Group.

We are part of the Computer Vision Laboratory, Department of Automatic Control and Robotics, Faculty of Electrical Engineering, Automatics, Computer Science and Biomedical Engineering (EAIiIB), AGH University of Krakow, Poland.

Our research focuses on the design and implementation of embedded perception systems that process, in real time and at low power, high-resolution video streams (up to UHD, 3840 × 2160 at 60 fps), LiDAR point clouds, and data from event cameras (Dynamic Vision Sensors, DVS). We target autonomous mobile robotics, including Unmanned Aerial Vehicles (UAVs), Unmanned Ground Vehicles (UGVs), and legged robots, where fast and efficient perception is critical for control and decision-making. We combine classical computer vision algorithms with deep neural networks, especially Graph Neural Networks (GNNs), which are well suited to sparse data such as event streams and point clouds.

Our work with event cameras extends into neuromorphic computing more broadly: we investigate Spiking Neural Networks (SNNs), event-based audio processing, and neuromorphic control for advanced mobile robotics.

We also investigate embedded implementations of control algorithms, spanning classical methods such as Model Predictive Control (MPC), data-driven approaches such as Reinforcement Learning (RL), and hybrids of the two.

Our hardware platforms include reprogrammable FPGAs (Field-Programmable Gate Arrays), SoCs (Systems on Chip) such as Zynq, Zynq UltraScale+ MPSoC (Multi-Processor System on Chip), and Versal ACAP (Adaptive Compute Acceleration Platform), as well as embedded GPUs, including NVIDIA Jetson platforms, and emerging neuromorphic hardware.
