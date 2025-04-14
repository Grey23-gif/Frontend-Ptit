# SMARTLibrary_075_NVMT Diagram

```mermaid
graph TD
    subgraph SMARTLibrary_075_NVMT
        subgraph SYSTEM_SMARTLibrary_075_NVMT
            DG1[DG1_75_NVMT]
            DG2[DG2_75_NVMT]
            Librarier[Librarier_75_NVMT]
            Program

            DG1 -->|green| DG2
            DG1 -->|green| Librarier
            DG2 -->|purple| Librarier
            Librarier -->|purple| Program
        end
    end

    Program -->|purple| Externals[Externals_75_NVMT]
