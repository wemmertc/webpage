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
[**Towards Histopathological Stain Invariance by Unsupervised Domain Augmentation using Generative Adversarial Networks**](https://www-sciencedirect-com.scd-rproxy.u-strasbg.fr/science/article/abs/pii/S0925231221010390)  
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
 * {: .ref #ae2019}Jurado, X., Reiminger, N., Vazquez, J., Wemmert, C., Dufresne, M., Blond, N. and Wertel, J. (2019)  
[**Assessment of mean annual NO2 concentration based on a partial dataset**](https://doi.org/10.1016/j.atmosenv.2019.117087)  
Atmospheric Environment, 221, 117087 - [[Abstract]](javascript: toggleInfos('ae2019','abstract')) - [[BibTeX]](javascript: toggleInfos('ae2019','bibtex')) - [[PDF]](./publications/ae2019.pdf) 
 * {:.bibtex  #ae2019_bibtex} ```latex 
@article{jurado2020assessment,
  title={Assessment of mean annual NO2 concentration based on a partial dataset},
  author={Jurado, Xavier and Reiminger, Nicolas and Vazquez, Jos{\'e} and Wemmert, C{\'e}dric and Dufresne, Matthieu and Blond, Nad{\`e}ge and Wertel, Jonathan},
  journal={Atmospheric Environment},
  volume={221},
  pages={117087},
  year={2020},
  publisher={Elsevier}
}
```  
 * {:.abstract  #ae2019_abstract} NO2 is a pollutant harmful to both health and the environment. The European Union and the World Health Organization have developed guidelines in terms of pollutant. The value of 40 μg/m3 is set by both entities as the annual mean NO2 concentration not to be exceeded to prevent risks for human health. To assess this given value, yearlong in situ measurements are required. However, sometimes only partial data are available, such as having only NOx (NO + NO2) information, on the one hand, and, on the other hand, brief NO2 measurements performed over few months. To overcome the first hurdle, several methods exist in the literature to transform NOx data into NO2 data. The method of Derwent and Middleton is the most appropriate for France with less than 8% of deviation and even less deviation when considering rural and urban sites. For all values, NOx concentrations behave as expected with higher concentrations in autumn and winter than in spring and summer. However, for NO2 this trend changes around 80 μg/m³ for which the spring and summer values are higher. Therefore, to maximize measurements to assess an upper limit on annual NO2 concentration over a short period of time, those measurements should be done in winter if an annual concentration of less than 80 μg/m3 is expected, otherwise they should carry out in summer. To tackle the second issue, a second order polynomial approach is built on a Paris dataset covering years between 2013 and 2017 to determine annual mean concentrations with monthly mean concentrations and gives an overall error of 10%. The law built on Paris was then tested on several regions in France for the same period and resulted in predicted values with a mean error of about 15% compared to the measured ones. In the end, the presented methodology allows covering twelve times more ground with a single NO2 or NOx sensor with an acceptable error.
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
 * {: .ref #bcrt2017}Schaadt, Alfonso, Schönmeyer, Grote, Forestier, Krönke, Mechthild, Kreipe, Haralampos, Wemmert and Feuerhake (2017)  
[**Image analysis of immune cell patterns in the human mammary gland during the menstrual cycle refines lymphocytic lobulitis**](http://doi.org/10.1007/s10549-017-4239-z)  
Breast Cancer Res Treat, 164 (2), 305-315 - [[Abstract]](javascript: toggleInfos('bcrt2017','abstract')) - [[BibTeX]](javascript: toggleInfos('bcrt2017','bibtex')) - [[PDF]](./publications/bcrt2017.pdf) 
 * {:.bibtex  #bcrt2017_bibtex} ```latex 
@article{schaadt2017image,
  title={Image analysis of immune cell patterns in the human mammary gland during the menstrual cycle refines lymphocytic lobulitis},
  author={Schaadt, Nadine S and Alfonso, Juan Carlos L{\'o}pez and Sch{\"o}nmeyer, Ralf and Grote, Anne and Forestier, Germain and Wemmert, C{\'e}dric and Kr{\"o}nke, Nicole and Stoeckelhuber, Mechthild and Kreipe, Hans H and Hatzikirou, Haralampos and others},
  journal={Breast cancer research and treatment},
  volume={164},
  number={2},
  pages={305--315},
  year={2017},
  publisher={Springer}
}
```  
 * {:.abstract  #bcrt2017_abstract} Purpose: To improve microscopic evaluation of immune cells relevant in breast cancer oncoimmunology, we aim at distinguishing normal infiltration patterns from lymphocytic lobulitis by advanced image analysis. We consider potential immune cell variations due to the menstrual cycle and oral contraceptives in nonneoplastic mammary gland tissue.  
Methods: Lymphocyte and macrophage distributions were analyzed in the anatomical context of the resting mammary gland in immunohistochemically stained digital whole slide images obtained from 53 reduction mammoplasty specimens. Our image analysis workflow included automated regions of interest detection, immune cell recognition, and co-registration of regions of interest.  
Results: In normal lobular epithelium, seven CD8+ lymphocytes per 100 epithelial cells were present on average and about 70% of this T-lymphocyte population was lined up along the basal cell layer in close proximity to the epithelium. The density of CD8+ T-cell was 1.6 fold higher in the luteal than in the follicular phase in spontaneous menstrual cycles and 1.4 fold increased under influence of oral contraceptives, and not co-localized with epithelial proliferation. CD4+ T-cells were infrequent. Abundant CD163+ macrophages were widely spread, including the interstitial compartment, with minor variation during the menstrual cycle.  
Conclusions: Spatial patterns of different immune cell subtypes determine the range of normal, as opposed to inflammatory conditions of the breast tissue microenvironment. Advanced image analysis enables quantification of hormonal effects, refines lymphocytic lobulitis, and shows potential for comprehensive biopsy evaluation in oncoimmunology
 * {: .ref #cbm2016}Apou, Schaadt, Naegel, Forestier, Schönmeyer, Feuerhake, Wemmert and Grote (2016)  
[**Detection of lobular structures in normal breast tissue**](https://doi.org/10.1016/j.compbiomed.2016.05.004)  
Computers in Biology and Medicine, pages 91-102, Volume 74 - [[Abstract]](javascript: toggleInfos('cbm2016','abstract')) - [[BibTeX]](javascript: toggleInfos('cbm2016','bibtex')) - [[PDF]](./publications/cbm2016.pdf) 
 * {:.bibtex  #cbm2016_bibtex} ```latex 
@article{apou2016detection,
  title={Detection of lobular structures in normal breast tissue},
  author={Apou, Gr{\'e}gory and Schaadt, Nadine S and Naegel, Beno{\^\i}t and Forestier, Germain and Sch{\"o}nmeyer, Ralf and Feuerhake, Friedrich and Wemmert, C{\'e}dric and Grote, Anne},
  journal={Computers in biology and medicine},
  volume={74},
  pages={91--102},
  year={2016},
  publisher={Elsevier}
}
```  
 * {:.abstract  #cbm2016_abstract} Background: Ongoing research into inflammatory conditions raises an increasing need to evaluate immune cells in histological sections in biologically relevant regions of interest (ROIs). Herein, we compare different approaches to automatically detect lobular structures in human normal breast tissue in digitized whole slide images (WSIs). This automation is required to perform objective and consistent quantitative studies on large data sets.  
Methods: In normal breast tissue from nine healthy patients immunohistochemically stained for different markers, we evaluated and compared three different image analysis methods to automatically detect lobular structures in WSIs: (1) a bottom-up approach using the cell-based data for subsequent tissue level classification, (2) a top-down method starting with texture classification at tissue level analysis of cell densities in specific ROIs, and (3) a direct texture classification using deep learning technology.  
Results: All three methods result in comparable overall quality allowing automated detection of lobular structures with minor advantage in sensitivity (approach 3), specificity (approach 2), or processing time (approach 1). Combining the outputs of the approaches further improved the precision.  
Conclusions: Different approaches of automated ROI detection are feasible and should be selected according to the individual needs of biomarker research. Additionally, detected ROIs could be used as a basis for quantification of immune infiltration in lobular structures.
