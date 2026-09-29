# Unveiling the Cognitive Compass: Theory-of-Mind–Guided Multimodal Emotion Reasoning

---

## Overview

In summary, this work makes three key contributions:

> **(1) HitEmotion Benchmark.**  
> We introduce **HitEmotion**, a **Theory-of-Mind (ToM)-grounded hierarchical benchmark** for multimodal emotion understanding, diagnosing capability breakpoints across increasing cognitive depths (from perception/recognition to cognition/reasoning).

> **(2) ToM-guided Reasoning Chain.**  
> We propose a **ToM-guided reasoning chain** that explicitly tracks intermediate mental states (e.g., beliefs/intentions) and calibrates cross-modal evidence for more faithful emotional reasoning.

> **(3) TMPO Optimization.**  
> We further introduce **TMPO**, a reinforcement learning method that uses **intermediate mental states as process-level supervision** (signals + rewards) to strengthen and stabilize reasoning, improving both accuracy and faithfulness.

## Project website

Live page: https://hitemotion.github.io/

This repository contains the static project website. The research code and data
are maintained at https://github.com/Eurekaleo/Emotional-Intelligence.
No build step, package installation, or third-party scripts are required.

Preview from the repository root:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open http://127.0.0.1:8000. Publishing uses the repository's existing GitHub Pages
configuration; running the preview does not publish anything.

### Content and assets

- Author names, order, and affiliations follow
  [arXiv v2](https://arxiv.org/html/2602.00971v2) and the research repository README.
  There are **11 authors**, including third author **Shanqing Xu** (affiliation 2).
- Keep the visible author list, `citation_author` metadata, displayed BibTeX,
  and `static/citation.bib` in sync when publication details change.
- `static/images/overview.webp` and `benchmark.webp` are web-optimized versions
  of Figures 1 and 2 from [the paper](https://arxiv.org/html/2602.00971v2)
  ([CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)).
  Sources: `https://arxiv.org/html/2602.00971v2/figures/teaser.png` and
  `https://arxiv.org/html/2602.00971v2/figures/benchmark.png`.
  They were encoded with `cwebp -q 88 -m 6 -resize 2200 0` and
  `cwebp -q 90 -m 6 -resize 2600 0`, respectively. No figure content was changed.
- Benchmark totals are reported from Table 1; the level breakdown follows Table 2.
- The ICLR button links to the official conference record. Only add a direct
  Poster download when an actual public poster file is available.
- The original Nerfies attribution is retained. Its demo image preloader and
  analytics ID were removed; this page does not send analytics to the template author.

Before publishing, check the author list, resource links, image loading, narrow
screens, keyboard navigation, and citation download. The copy button is a
progressive enhancement on secure origins; the citation and download remain
available when JavaScript or clipboard access is unavailable.
