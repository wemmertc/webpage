 * {: .ref #kbs2023}Vasiljevic, J., Feuerhake, F., Wemmert, C. and Lampert, T. (2023)  
[**HistoStarGAN: A unified approach to stain normalisation, stain transfer and stain invariant segmentation in renal histopathology**](https://www.sciencedirect.com/science/article/pii/S0950705123005300)  
Knowledge-Based Systems, 110780 - [[Abstract]](javascript: toggleInfos('kbs2023','abstract')) - [[BibTeX]](javascript: toggleInfos('kbs2023','bibtex')) - [[PDF]](./publications/kbs2023.pdf) 
 * {:.bibtex  #kbs2023_bibtex} ```latex 
@article{vasiljevic2023histostargan,
  title={HistoStarGAN: A unified approach to stain normalisation, stain transfer and stain invariant segmentation in renal histopathology},
  author={Vasiljevi{\'c}, Jelica and Feuerhake, Friedrich and Wemmert, C{\'e}dric and Lampert, Thomas},
  journal={Knowledge-Based Systems},
  volume={277},
  pages={110780},
  year={2023},
  publisher={Elsevier}
}
```  
 * {:.abstract  #kbs2023_abstract} Virtual stain transfer is a promising area of research in Computational Pathology, which has a great potential to alleviate important limitations when applying deep-learning-based solutions such as lack of annotations and sensitivity to a domain shift. However, in the literature, the majority of virtual staining approaches are trained for a specific staining or stain combination, and their extension to unseen stainings requires the acquisition of additional data and training. In this paper, we propose HistoStarGAN, a unified framework that performs stain transfer between multiple stainings, stain normalisation and stain invariant segmentation, all in one inference of the model. We demonstrate the generalisation abilities of the proposed solution to perform diverse stain transfer and accurate stain invariant segmentation over numerous unseen stainings, which is the first such demonstration in the field. Moreover, the pre-trained HistoStarGAN model can serve as a synthetic data generator, which paves the way for the use of fully annotated synthetic image data to improve the training of deep learning-based algorithms. To illustrate the capabilities of our approach, as well as the potential risks in the microscopy domain, inspired by applications in natural images, we generated KidneyArtPathology, a fully annotated artificial image dataset for renal pathology.
 * {: .ref #aim2022b}Vasiljevic, J., Nisar, Z., Feuerhake, F., Wemmert, C. and Lampert, T. (2022)  
[**CycleGAN for virtual stain transfer: Is seeing really believing?**](https://www.sciencedirect.com/science/article/pii/S0933365722001725)  
Artificial Intelligence in Medicine, 102420 - [[Abstract]](javascript: toggleInfos('aim2022b','abstract')) - [[BibTeX]](javascript: toggleInfos('aim2022b','bibtex')) - [[PDF]](./publications/aim2022b.pdf) 
 * {:.bibtex  #aim2022b_bibtex} ```latex 
@Article{2-VNFWL22,
 author = {Vasiljevic, J. and Nisar, Z. and Feuerhake, F. and Wemmert, C. and Lampert, T.},
 title = {CycleGAN for virtual stain transfer: Is seeing really believing?},
 journal = {Artificial Intelligence in Medicine},
 volume = {102420},
 month = {Oct},
 year = {2022},
 doi = {10.1016/j.artmed.2022.102420},
 x-international-audience = {Yes},
 x-language = {EN}
}
```  
 * {:.abstract  #aim2022b_abstract} Digital Pathology is an area prone to high variation due to multiple factors which can strongly affect diagnostic quality and visual appearance of the Whole-Slide-Images (WSIs). The state-of-the art methods to deal with such variation tend to address this through style-transfer inspired approaches. Usually, these solutions directly apply successful approaches from the literature, potentially with some task-related modifications. The majority of the obtained results are visually convincing, however, this paper shows that this is not a guarantee that such images can be directly used for either medical diagnosis or reducing domain shift.This article shows that slight modification in a stain transfer architecture, such as a choice of normalisation layer, while resulting in a variety of visually appealing results, surprisingly greatly effects the ability of a stain transfer model to reduce domain shift. By extensive qualitative and quantitative evaluations, we confirm that translations resulting from different stain transfer architectures are distinct from each other and from the real samples. Therefore conclusions made by visual inspection or pretrained model evaluation might be misleading.
 * {: .ref #aim2022}Ben Hamida, A., Devanne, M., Weber, J., Truntzer, C., Derangere, V., Ghiringhelli, F., Forestier, G. and Wemmert, C. (2022)  
[**Weakly Supervised Learning using Attention gates for colon cancer histopathological image segmentation**](https://doi.org/10.1016/j.artmed.2022.102407)  
Artificial Intelligence in Medicine, 102407 - [[Abstract]](javascript: toggleInfos('aim2022','abstract')) - [[BibTeX]](javascript: toggleInfos('aim2022','bibtex')) - [[PDF]](./publications/aim2022.pdf) 
 * {:.bibtex  #aim2022_bibtex} ```latex 
@article{hamida2022deep, 
 title={Weakly Supervised Learning using Attention gates for colon cancer histopathological image segmentation}, 
 author={Ben Hamida, Amina and Devanne, Maxime and Weber, Jonathan and Truntzer, Caroline and Derangere, Valentin and Ghiringhelli, Francois and Forestier, Germain and Wemmert, Cedric},
 journal={Artificial Intelligence in Medicine},
 pages={102407},
 year={2022},
 publisher={Elsevier}
 }
```  
 * {:.abstract  #aim2022_abstract} Recently, Artificial Intelligence namely Deep Learning methods have revolutionized a wide range of domains and applications. Besides, Digital Pathology has so far played a major role in the diagnosis and the prognosis of tumors. However, the characteristics of the Whole Slide Images namely the gigapixel size, high resolution and the shortage of richly labeled samples have hindered the efficiency of classical Machine Learning methods. That goes without saying that traditional methods are poor in generalization to different tasks and data contents. Regarding the success of Deep learning when dealing with Large Scale applications, we have resorted to the use of such models for histopathological image segmentation tasks. First, we review and compare the classical UNet and Att-UNet models for colon cancer WSI segmentation in a sparsely annotated data scenario. Then, we introduce novel enhanced models of the Att-UNet where different schemes are proposed for the skip connections and spatial attention gates positions in the network. In fact, spatial attention gates assist the training process and enable the model to avoid irrelevant feature learning. Alternating the presence of such modules namely in our Alter-AttUNet model adds robustness and ensures better image segmentation results. In order to cope with the lack of richly annotated data in our AiCOLO colon cancer dataset, we suggest the use of a multi-step training strategy that also deals with the WSI sparse annotations and unbalanced class issues. All proposed methods outperform state-of-the-art approaches but Alter-AttUNet generates the best compromise between accurate results and light network. The model achieves 95.88% accuracy with our sparse AiCOLO colon cancer datasets. Finally, to evaluate and validate our proposed architectures we resort to publicly available WSI data: the NCT-CRC-HE-100K, the CRC-5000 and the Warwick colon cancer histopathological dataset. Respective accuracies of 99.65%, 99.73% and 79.03% were reached. A comparison with state-of-art approaches is established to view and compare the key solutions for histopathological image segmentation.
 * {: .ref #eswa2022}Jurado, X., Reiminger, N., Benmoussa, M., Vazquez, J. and Wemmert, C. (2022)  
[**Deep Learning methods evaluation to predict air quality based on computational fluid dynamics**]()  
Expert Systems With Applications,  - [[Abstract]](javascript: toggleInfos('eswa2022','abstract')) - [[BibTeX]](javascript: toggleInfos('eswa2022','bibtex')) - [[PDF]](./publications/eswa2022.pdf) 
 * {:.bibtex  #eswa2022_bibtex} ```latex 
@article{jurado2022eswa}
```  
 * {:.abstract  #eswa2022_abstract} Air quality is a major health issue for densified cities nowadays. To evaluate and act upon it, modeling alongside sensors has proved to be a powerful tool. Among the different available models, Computational Fluid Dynamics (CFD) has proved to be formidable to evaluate airborne pollutant dispersion locally in urban areas since it is able to consider buildings and others complexes phenomenon at the scale of the meter. Nevertheless, this method has a major drawback, it is computationally expensive and cannot be applied in real time or over large areas. To overcome this issue, several state-of-the-art  deep learning methods to treat spatial information have been trained based on CFD results to predict airborne pollutant dispersion. Among these models, multiResUnet architecture was proved to be the best on overall over seven metrics. It managed to have two out of three air quality metrics within acceptable range for a good air quality model. These results are obtained in a mere matter of minutes against several tenth of hours for CFD.
 * {: .ref #cbm2021}Ben Hamida, A., Devanne, M., Weber, J., Truntzer, C., Derangere, V., Ghiringhelli, F., Forestier, G. and Wemmert, C. (2021)  
[**Deep learning for colon cancer histopathological images analysis**](https://doi.org/10.1016/j.compbiomed.2021.104730)  
Computers in Biology and Medicine, Vol. 136, 104730 - [[Abstract]](javascript: toggleInfos('cbm2021','abstract')) - [[BibTeX]](javascript: toggleInfos('cbm2021','bibtex')) - [[PDF]](./publications/cbm2021.pdf) 
 * {:.bibtex  #cbm2021_bibtex} ```latex 
@article{hamida2021deep, 
 title={Deep learning for colon cancer histopathological images analysis}, 
 author={Ben Hamida, Amina and Devanne, Maxime and Weber, Jonathan and Truntzer, Caroline and Derangere, Valentin and Ghiringhelli, Francois and Forestier, Germain and Wemmert, Cedric},
 journal={Computers in Biology and Medicine},
 volume={136},
 pages={104730},
 year={2021},
 publisher={Elsevier}
 }
```  
 * {:.abstract  #cbm2021_abstract} Nowadays, digital pathology plays a major role in the diagnosis and prognosis of tumours. Unfortunately, existing methods remain limited when faced with the high resolution and size of Whole Slide Images (WSIs) coupled with the lack of richly annotated datasets. Regarding the ability of the Deep Learning (DL) methods to cope with the large scale applications, such models seem like an appealing solution for tissue classification and segmentation in histopathological images. This paper focuses on the use of DL architectures to classify and highlight colon cancer regions in a sparsely annotated histopathological data context. First, we review and compare state-of-the-art Convolutional Neural networks (CNN) including the AlexNet, vgg, ResNet, DenseNet and Inception models. To cope with the shortage of rich WSI datasets, we have resorted to the use of transfer learning techniques. This strategy comes with the hallmark of relying on a large size computer vision dataset (ImageNet) to train the network and generate a rich collection of learnt features. The testing and evaluation of such models on our AiCOLO colon cancer dataset ensure accurate patch-level classification results reaching up to 96.98% accuracy rate with ResNet. The CNN models have also been tested and evaluated with the CRC-5000, nct-crc-he-100k and merged datasets. ResNet respectively achieves 96.77%, 99.76% and 99.98% for the three publicly available datasets. Then, we present a pixel-wise segmentation strategy for colon cancer WSIs through the use of both UNet and SegNet models. We introduce a multi-step training strategy as a remedy for the sparse annotation of histopathological images. UNet and SegNet are used and tested in different training scenarios including data augmentation and transfer learning and ensure up to 76.18% and 81.22% accuracy rates. Besides, we test our training strategy and models on the CRC-5000, nct-crc-he-100k and Warwick datasets. Respective accuracy rates of 98.66%, 99.12% and 78.39% were achieved by SegNet. Finally, we analyze the existing models to discover the most suitable network and the most effective training strategy for our colon tumour segmentation case study.
 * {: .ref #neurocomp2021}Vasiljevic, J., Feuerhake, F., Wemmert, C. and Lampert, T. (2021)  
[**Towards Histopathological Stain Invariance by Unsupervised Domain Augmentation using Generative Adversarial Networks**](https://www.sciencedirect.com/science/article/abs/pii/S0925231221010390)  
Neurocomputing, 460, 277--291 - [[Abstract]](javascript: toggleInfos('neurocomp2021','abstract')) - [[BibTeX]](javascript: toggleInfos('neurocomp2021','bibtex')) - [[PDF]](./publications/neurocomp2021.pdf) 
 * {:.bibtex  #neurocomp2021_bibtex} ```latex 
@Article{2-VFWL21,
 author = {Vasiljevic, J. and Feuerhake, F. and Wemmert, C. and Lampert, T.},
 title = {Towards Histopathological Stain Invariance by Unsupervised Domain Augmentation using Generative Adversarial Networks},
 journal = {Neurocomputing},
 volume = {460},
 pages = {277-291},
 month = {Oct},
 year = {2021},
 doi = {10.1016/j.neucom.2021.07.005},
 x-international-audience = {Yes},
 x-language = {EN},
 url = {http://icube-publis.unistra.fr/2-VFWL21}
}
```  
 * {:.abstract  #neurocomp2021_abstract} The application of supervised deep learning methods in digital pathology is limited due to their sensitivity to domain shift. Digital Pathology is an area prone to high variability due to many sources, including the common practice of evaluating several consecutive tissue sections stained with different staining protocols. Obtaining labels for each stain is very expensive and time consuming as it requires a high level of domain knowledge. In this article, we propose an unsupervised augmentation approach based on adversarial image-to-image translation, which facilitates the training of stain invariant supervised convolutional neural networks. By training the network on one commonly used staining modality and applying it to images that include corresponding, but differently stained, tissue structures, the presented method demonstrates significant improvements over other approaches. These benefits are illustrated in the problem of glomeruli segmentation in seven different staining modalities (PAS, Jones H&E, CD68, Sirius Red, CD34, H&E and CD3) and analysis of the learned representations demonstrate their stain invariance.
 * {: .ref #cmpb2021}Merveille, O., Lampert, T., Schmitz, J., Forestier, G., Feuerhake, F. and Wemmert, C. (2021)  
[**An automatic framework for fusing information from differently stained consecutive digital whole slide images: A case study in renal histology**](https://doi.org/10.1016/j.cmpb.2021.106157)  
Computer Methods and Programs in Biomedicine, 208, 106157 - [[Abstract]](javascript: toggleInfos('cmpb2021','abstract')) - [[BibTeX]](javascript: toggleInfos('cmpb2021','bibtex')) - [[PDF]](./publications/cmpb2021.pdf) 
 * {:.bibtex  #cmpb2021_bibtex} ```latex 
@Article{2-MLSF21,
 author = {Merveille, O. and Lampert, T. and Schmitz, J. and Forestier, G. and Feuerhake, F. and Wemmert, C.},
 title = {An automatic framework for fusing information from differently stained consecutive digital whole slide images: A case study in renal histology},
 journal = {Computer Methods and Programs in Biomedicine},
 volume = {208},
 pages = {106157},
 year = {2021},
 x-international-audience = {Yes},
 x-language = {EN},
 url = {http://icube-publis.unistra.fr/2-MLSF21}
}
```  
 * {:.abstract  #cmpb2021_abstract} Objective: This article presents an automatic image processing framework to extract quantitative high-level information describing the micro-environment of glomeruli in consecutive whole slide images (WSIs) processed with different staining modalities of patients with chronic kidney rejection after kidney transplantation.
 * {: .ref #cmaj2019}Pelaccia, T., Forestier, G. and Wemmert, C. (2019)  
[**Deconstructing the diagnostic reasoning of human versus artificial intelligence**](https://doi.org/10.1503/cmaj.190506)  
Canadian Medical Association Journal, Vol. 191(48), pp. E1332 - [[Abstract]](javascript: toggleInfos('cmaj2019','abstract')) - [[BibTeX]](javascript: toggleInfos('cmaj2019','bibtex')) - [[PDF]](./publications/cmaj2019.pdf) 
 * {:.bibtex  #cmaj2019_bibtex} ```latex 
@article{pelaccia2019deconstructing,
  title={Deconstructing the diagnostic reasoning of human versus artificial intelligence},
  author={Pelaccia, Thierry and Forestier, Germain and Wemmert, C{\'e}dric},
  journal={CMAJ},
  volume={191},
  number={48},
  pages={E1332--E1335},
  year={2019},
  publisher={Can Med Assoc}
}
```  
 * {:.abstract  #cmaj2019_abstract} This article...
 * {: .ref #tmi2018}Grote, Schaadt, Forestier, Wemmert and Feuerhake (2018)  
[**Crowdsourcing of Histological Image Labeling and Object Delineation by Medical Students**](https://doi.org/10.1109/TMI.2018.2883237)  
IEEE Transactions on Medical Imaging, 38(5), 1284-1294 - [[Abstract]](javascript: toggleInfos('tmi2018','abstract')) - [[BibTeX]](javascript: toggleInfos('tmi2018','bibtex')) - [[PDF]](./publications/tmi2018.pdf) 
 * {:.bibtex  #tmi2018_bibtex} ```latex 
@article{grote2018crowdsourcing,
  title={Crowdsourcing of Histological Image Labeling and Object Delineation by Medical Students},
  author={Grote, Anne and Schaadt, Nadine S and Forestier, Germain and Wemmert, C{\'e}dric and Feuerhake, Friedrich},
  journal={IEEE transactions on medical imaging},
  volume={38},
  number={5},
  pages={1284--1294},
  year={2018},
  publisher={IEEE}
}
```  
 * {:.abstract  #tmi2018_abstract} Crowdsourcing in pathology has been performed on tasks that are assumed to be manageable by nonexperts. Demand remains high for annotations of more complex elements in digital microscopic images, such as anatomical structures. Therefore, this paper investigates conditions to enable crowdsourced annotations of high-level image objects, a complex task considered to require expert knowledge. Seventy six medical students without specific domain knowledge who voluntarily participated in three experiments solved two relevant annotation tasks on histopathological images: 1) labeling of images showing tissue regions and 2) delineation of morphologically defined image objects.  
We focus on methods to ensure sufficient annotation quality including several tests on the required number of participants and on the correlation of participants' performance between tasks. In a set up simulating annotation of images with limited ground truth, we validated the feasibility of a confidence score using full ground truth. For this, we computed a majority vote using weighting factors based on individual assessment of contributors against scattered gold standard annotated by pathologists. In conclusion, we provide guidance for task design and quality control to enable a crowdsourced approach to obtain accurate annotations required in the era of digital pathology.
 * {: .ref #if2018}Cornuéjols, Wemmert, Gançarski and Bennani (2018)  
[**Collaborative Clustering: Why, When, What and How**](https://doi.org/10.1016/j.inffus.2017.04.008)  
Information Fusion, Volume 39, Pages 81-95 - [[Abstract]](javascript: toggleInfos('if2018','abstract')) - [[BibTeX]](javascript: toggleInfos('if2018','bibtex')) - [[PDF]](./publications/if2018.pdf) 
 * {:.bibtex  #if2018_bibtex} ```latex 
@article{cornuejols2018collaborative,
  title={Collaborative clustering: Why, when, what and how},
  author={Cornu{\'e}jols, Antoine and Wemmert, C{\'e}dric and Gan{\c{c}}arski, Pierre and Bennani, Youn{\`e}s},
  journal={Information Fusion},
  volume={39},
  pages={81--95},
  year={2018},
  publisher={Elsevier}
}
```  
 * {:.abstract  #if2018_abstract} Clustering is one type of unsupervised learning where the goal is to partition the set of objects into groups called clusters. Faced to the difficulty to design a general purpose clustering algorithm and to choose a good, let alone perfect, set of criteria for clustering a data set, one solution is to resort to a variety of clustering procedures based on different techniques, parameters and/or initializations, in order to construct one (or several) final clustering(s). The hope is that by combining several clustering solutions, each one with its own bias and imperfections, one will get a better overall solution.  
In the cooperative clustering model, as Ensemble Clustering, a set of clustering algorithms are used in parallel on a given data set: the local results are combined to get a hopefully better overall clustering. In the collaborative framework, the goal is that each local computation, quite possibly applied to distinct data sets, benefit from the work done by the other collaborators.  
This paper is dedicated to collaborative clustering. In particular, after a brief overview of clustering and the major issues linked to, it presents main challenges related to organize and control the collaborative process.
