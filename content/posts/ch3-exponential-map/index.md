---
title: "Ch3. Exponential Map on Lie Group"
date: 2026-01-29
tags: ["Lie Group", "Robotics"]
draft: false
---

3장에서 기술하는 내용은 다음과 같다. 

{{< fig src="Ch3_1.png" width="500" >}}
&lt;Fig 3.1&gt; Relationships between $\xi$, $R$, $\omega$ and $\dot{\xi}$. where $\omega$ denote the body angular velocity represented in the body frame, respectively.
{{< /fig >}}

위의 Figure 3.1처럼 $SO(3)$와 $R^3$ 사이의 변환 관계에 대해 기술한다. 
앞선 1장과 2장을 통해 R과 $\omega$, $\xi$와 $\dot{\xi}$의 관계는 알고 있다. 
3장에선 R과 $\xi$, $\omega$와 $\dot{\xi}$의 관계는 어떻게 정의되는지를 나타낸다.

**Exponential Map (SO(3)):**
$$
\begin{equation}
\begin{aligned}
R &= \exp(\xi) = I + \alpha\lceil\xi\rceil + \frac{\beta}{2}\lceil\xi\rceil^2\\[8pt]
\alpha &= sc \quad\quad \text{and} \quad\quad \beta =s^2,\\[8pt]
s &:= \frac{\sin(\Vert\xi\Vert/2)}{\Vert\xi\Vert/2)}\quad\quad \text{and} \quad\quad c :=cos(\Vert\xi\Vert/2)).
\end{aligned}
\end{equation}
\tag{3.5}
$$

**Logarithm (SO(3))****

**1. Group logarithm in SO(3)** 
Gregory series 전개를 이용한 근사 방법이다.
$$\log(R) = -2 \sum_{k=0}^{\infty} \frac{1}{2k+1} \left( (I-R)(I+R)^{-1} \right)^{2k+1}
\tag{3.10}
$$

**2. Rodrigues' formula** 
Rotation Matrix의 Trace와 비대칭 성분(Skew-symmetric)을 이용하는 기하학적 방법이다.
when $\alpha \neq 0$,
$$\begin{equation}
\begin{aligned} 
\|\xi\| = 2\sin^{-1}\left(\frac{\sqrt{3-\text{tr}(R)}}{2}\right) 
\end{aligned}
\end{equation}
$$

when $\alpha = 0$, 
$$
\begin{equation}
\begin{array}{ccccc}
  \xi = \frac{\pi}{\sqrt{2}} 
  \begin{bmatrix} 
    \sqrt{R_{11} + 1} \\[6pt]
    \dfrac{R_{21}}{\sqrt{R_{11} + 1}} \\[9pt]
    \dfrac{R_{31}}{\sqrt{R_{11} + 1}} 
  \end{bmatrix}
  & \text{or} &
  \frac{\pi}{\sqrt{2}} 
  \begin{bmatrix} 
    \dfrac{R_{12}}{\sqrt{R_{22} + 1}} \\[9pt]
    \sqrt{R_{22} + 1} \\[6pt]
    \dfrac{R_{32}}{\sqrt{R_{22} + 1}} 
  \end{bmatrix}
  & \text{or} &
  \frac{\pi}{\sqrt{2}} 
  \begin{bmatrix} 
    \dfrac{R_{13}}{\sqrt{R_{33} + 1}} \\[9pt]
    \dfrac{R_{23}}{\sqrt{R_{33} + 1}} \\[9pt]
    \sqrt{R_{33} + 1} 
  \end{bmatrix}
  \\[40pt]
  \text{when } R_{11} + 1 \neq 0
  & &
  \text{when } R_{22} + 1 \neq 0
  & &
  \text{when } R_{33} + 1 \neq 0,
\end{array}
\tag{3.17}
\end{equation}
$$

**3. Eigenvector** 
회전 행렬의 고유벡터 성질 $R\hat{\xi} = \hat{\xi}$ 을 이용하여 회전축을 구하는 방법으로, $\theta \approx \pi$인 특이점(Singularity) 근처에서 Rodrigues 방법보다 Robust하다.
$$(R - I)\hat{\xi} = 0$$

**Differential of exponential (SO(3))**

**Inverse of differential of exponential (SO(3))**


{{< fig src="Ch3_2.png" width="500" >}}
&lt;Fig 3.2&gt; Relationships between $\lambda$, $T$, $\V$ and $\dot{\lambda}$. where $\V$ denote the body twist represented in the body frame, respectively.
{{< /fig >}}

마찬가지로 Figure 3.2처럼 $SE(3)$와 $R^6$ 사이의 변환 관계에 대해 기술한다.

**Exponential Map (SE(3)):**
$T = \exp(\lambda^\wedge) = \begin{bmatrix} R & J_l(\xi)\rho \\ 0 & 1 \end{bmatrix}$
where $\lambda = \begin{bmatrix} \rho \\ \xi \end{bmatrix} \in \mathbb{R}^6$, $R = \exp(\xi^\wedge)$.

**Logarithm (SE(3))**
logarithm은 3가지 방법을 통해 기술한다. 
1. Group logarithm in SO(3)
2. Rodrigues' formula
3. Eigenvector

**Differential of exponential (SE(3))**

**Inverse of differential of exponential (SE (3))**