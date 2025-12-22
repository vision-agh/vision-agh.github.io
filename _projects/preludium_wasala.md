---
layout: project

img: assets/img/projects/logo_ncn-preludium.png
importance: 1
category: NCN
related_publications: true

title: NCN Preludium
principal_investigator: Msc Mateusz Wąsala

acronym_en: EEVONN
title_en: Embedded Event-Based Visual Odometry Using Neural Networks
acronym_pl: EEVONN
title_pl: Wbudowana odometria wizyjna wykorzystująca sieci neuronowe oraz dane zdarzeniowe

start_date: 2026-01-28
end_date: 2028-01-28

budget: 136640

keywords: 
    - Event Cameras
    - Event-based Odometry
    - UAVs
    - Embedded Platforms
    - Deep Neural Networks

abstract: >
    Position and motion estimation is a key challenge in autonomous navigation of unmanned aerial vehicles (UAVs), especially in environments where GPS signals are unavailable, degraded, or unreliable - such as indoor spaces, tunnels, dense forests, areas with strong electromagnetic interference, or in space and planetary exploration missions. In such conditions, infrastructure-independent localization methods based solely on onboard sensors - such as cameras, lidars, or inertial measurement units (IMUs) - are essential. The difficulty increases in highly dynamic scenarios where conventional frame-based cameras exhibit significant limitations due to motion blur, poor resilience to changing lighting conditions, and high energy and computational demands. A promising alternative is offered by event cameras - neuromorphic vision sensors that operate asynchronously and register only pixel-level changes in brightness. The event stream they generate offers high temporal resolution and a wide dynamic range (HDR) while significantly reducing energy consumption and eliminating motion blur. These characteristics make event cameras an ideal component for UAV perception systems operating in harsh or non-cooperative environments, including extra-terrestrial settings where reliability and energy efficiency are crucial.

    The objective of the present project is to develop innovative perception and navigation methodologies for UAVs that leverage event-based vision and energy-efficient heterogeneous System-on-Chip Field-Programmable Gate Array (SoC FPGA) platforms. These platforms integrate general-purpose processors (CPUs) with reconfigurable logic fabric (FPGAs), enabling real-time, low-power, on-device data processing in a compact form factor with minimal energy requirements. A key focus of this study is to investigate capabilities and limitations of hardware-aware implementations of event-based visual odometry algorithms on embedded platforms. While current research predominantly concentrates on algorithmic aspects, it often neglects hardware efficiency and power constraints. This project addresses that knowledge gap by proposing architectural and algorithmic modifications that enable hardware-optimised position estimation based on event data.
    The research will involve the design of specialised neural network architectures adapted to the unique characteristics of event data, including graph neural networks (GNNs) and spiking neural networks (SNNs), which more accurately capture its spatiotemporal structure. These models will undergo a process of miniaturization and simplification in accordance with the TinyML (Tiny Machine Learning) paradigm. This is done to ensure compatibility with hardware that is limited in resources while maintaining the quality of inference.  In order to reduce computational and memory demands, advanced quantisation techniques for weights and activations will be applied, thus minimising numerical precision without a significant loss of accuracy. Concurrently, pivotal neural network operations – including matrix multiplications and convolutions – will be optimised with respect to the architectural intricacies of FPGA-based hardware.

    The final outcome of the project will be a set of integrated hardware-software modules implementing a complete event-based UAV navigation system, covering the entire processing pipeline from data acquisition to trajectory estimation. In order to demonstrate the practical feasibility of the developed solutions, a functional system demonstrator will be constructed. 

    The findings will be presented in journals and scientific conferences, and part of the code will be made available in an open repository. This research will not only address the scientific challenges posed by processing event camera data but also contribute to the development of more efficient vision systems for mobile robotics, enhancing their safety and reliability.

image: preludium_MW_short_scheme.png
image_caption: 

publications: 'author^=*Wasala, projects^=*Preludium'
---
