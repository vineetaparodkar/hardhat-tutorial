# Basic Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.


## Commands

1. Compile smart contracts

    `npx hardhat compile`

2. Clean hardhat project==> deletes artifacts folder

    `npx hardhat clean `

3. deploy contracts

    `npx hardhat run scripts/event-log-script.js --network polygon`

4. deploy and verify contract 

    `npx hardhat run scripts/deploy.js --network polygon`

5. testing contracts

    `npx hardhat test`

6. test coverage

    `npx hardhat coverage --testfiles "test/*.js"`

7. estimate gas output saved to file gas-report.txt

    `npx hardhat test --network polygon`

8. contract sizer

    `npx hardhat size-contracts`

9. parallel test

    `npx hardhat test --parallel`

Note: gas-reporting does not support parallel test



- lint cmds

    `npx solhint 'contracts/**/*.sol' `

    `npx solhint 'contracts/**/*.sol' --fix`

    `npx eslint '**/*.js'`

    `npx eslint '**/*.js' --fix`

    `npx prettier '**/*.{json,sol,md}' --check`

    `npx prettier '**/*.{json,sol,md}' --write`


