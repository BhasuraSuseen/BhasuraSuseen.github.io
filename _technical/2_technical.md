---
layout: page
title: Undergraduate Reserch - Simulation of Climbing Plants with Twining Behaviour, 2018-2019.
description: Computer graphics simulation of biomechanical behaviors, including twining and support-finding in climbing plants.
img: assets/img/twining_1.png
importance: 2
category: Software_Projects
giscus_comments: false
---
Thesis Submitted as a partial fulfillment of the requirements of the B.Sc. in Computer Science (Hons) program. <br>
<b>Technologies - </b>  Unity 3D, C#, Position Based Dynamics (PBD) framework. <br>
<b>Advisors -</b> Dr. Manjusri  Wickramasinghe,  Mr. Chathura Jayalath. <br>

<div class="row">
    <div class="col-sm mt-3 mt-md-0"> 
        <!-- {% include video.html path="https://www.youtube.com/embed/ybruSmdzXuY" class="img-fluid rounded z-depth-1" width="956" height="568" %} -->
        <iframe width="568" height="300" src="https://www.youtube.com/embed/ybruSmdzXuY" frameborder="0"> </iframe>
        <br><br>
        {% include figure.html path="assets/img/twining_1.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        <b>Thesis Abstract</b><br>
        Vegetation simulation in computer graphics is a highly active research area due to its vast variety of applications such as immersive environments, landscaping, foresting, agriculture and autonomous plant agent modeling. Among many of vegetation units, climbing plants are complex to simulate because of their rigid and soft body characteristics. Even though state-of-art models simulates climbing plants in terms of growth, shape and visual realism there are many other bio-mechanical factors like support finding, effect of radius and mass along the stem, forming structure,  and  responding to external forces and parameters needs to be developed.

        In this dissertation a novel twining plant simulation model is proposed to address lack of bio-mechanical aspects in the state of art models. Twining plants find support structures using cuircumnutation behaviour and they use the same mechanism to twine around a support structure. In the proposed simulation model the plant stem is modelled as rigid particles connected by constraints. Bending and twisting constraints are derived from the Cosserat Rod model and the constraints are solved by the use of the Position Based Dynamics (PBD) framework. The Cuircumnutation behaviour is integrated to the rod model as a relative rotation model and a weight calibration of leaves in the twining plant. Usage of both particle and rod constraints gives flexibility to the model to simulate more nuanced biological and mechanical behaviours such as growth, support finding, structure formation, bending, twisting, and responding to physical environment. In addition, this research developed and integrated a taper function which models the effect of radius along the stem to enhance the realism.   

        The proposed model evaluated in terms of realism and performance. Realism aspects such as stem structure, growth of the stem, support finding mechanism (circumnutation) and radius along the stem were compared with state of the art models. Results show our simulation model surpass these bio-mechanical aspects in state of the art models. Performance analysis shows that around 40-50 instances of plant models can be simulated in a real-time setup.
    </div>
</div>
