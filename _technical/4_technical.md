---
layout: page
title: Face Detection in Large Distances (FaDiLD), Spring 2023.
description: Improving redina face for large distance face detection using IOU aware loss function. 
img: assets/img/facedetection.png
importance: 4
category: Visual Computing
---
<br>
<b>Technologies -</b> Python / PyTorch / Retina Face  <br>
<b>Role - </b>  I studied YOLO and Retina Net for object and face detection, analyzed the WiderFace Dataset for long-distance detection, implemented an IOU-aware head, and trained the model to significantly improve upon baseline results.<br>
<b>Contributors - </b> BISWAS DIPAYON <br>
Developed this project for Computer Vision graduate course module.<br>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/facedetection.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        Detecting faces from large distances presents a complex and demanding challenge in the domain
        of computer vision. The performance of RetinaFace, a common base model, is investigated in this
        work, and adjustments to improve its usefulness in long-distance face detection are proposed. The
        introduction of an Intersection over Union (IoU)-aware multi-task loss function, inspired by single-
        stage object detection algorithms, is the core novelty. Our findings show that this modified loss
        function has increased Average Precision by improving object localization accuracy in the face
        detection task. Experiments with two different backbone models, ResNet50 and MobileNet.25,
        demonstrate the effectiveness of our model. We used a paired t-test to confirm that there was
        a statistically significant performance gain over the baseline model. Despite attaining poorer
        performance than the original baseline paper due to differences in implementation and comparison
        with state-of-the-art models, our work highlights the possibility of further improvement.
        </div>
</div>


