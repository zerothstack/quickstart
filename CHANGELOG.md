<a name="1.0.1-0"></a>
## [1.0.1-0](https://github.com/zeroth/quickstart/compare/da1e75e...v1.0.1-0) (2016-11-29)


### Bug Fixes

* **bootstrap:** Fixed bootstrap not being invoked before usage ([ed987f1](https://github.com/zeroth/quickstart/commit/ed987f1))
* **controller:** Fixed controller with the old super signature ([e0d9df6](https://github.com/zeroth/quickstart/commit/e0d9df6))
* **controller:** Switched to new routeBase param of controller rather than decorator ([5339dfa](https://github.com/zeroth/quickstart/commit/5339dfa))
* **demo seeder:** Fix demo seeder always seeding even when seeds exist ([a9ca9b3](https://github.com/zeroth/quickstart/commit/a9ca9b3))
* **demo seeder:** Replaced missing DEMO_ID in .env.example ([db4e02f](https://github.com/zeroth/quickstart/commit/db4e02f))
* **env:** Update example.env, bump npm versions ([1d5d1ce](https://github.com/zeroth/quickstart/commit/1d5d1ce))
* **main:** Fix ts compiler warning ([aad4076](https://github.com/zeroth/quickstart/commit/aad4076))
* **middleware:** Force headName to lowercase for demo middleware ([73a3c04](https://github.com/zeroth/quickstart/commit/73a3c04))
* **npm:** Restored package json ([39a1609](https://github.com/zeroth/quickstart/commit/39a1609))
* **relationships:** Fix missing imports ([ba73fb9](https://github.com/zeroth/quickstart/commit/ba73fb9))
* **relationships:** Fix relationship definitions ([e6ca276](https://github.com/zeroth/quickstart/commit/e6ca276))
* **test:** Fix missing provider for app component in unit tests ([975b8da](https://github.com/zeroth/quickstart/commit/975b8da))
* **tests:** Fix missing UserMockStore provider ([559936a](https://github.com/zeroth/quickstart/commit/559936a))


### Features

* **bootstrap:** Implement async bootstrapping with check for database status so fallback to mock will work ([7ece712](https://github.com/zeroth/quickstart/commit/7ece712))
* **bootstrap:** Refactor out the bootstrap code ([d99ee4f](https://github.com/zeroth/quickstart/commit/d99ee4f))
* **changelog:** Updated changelog, add pr-bumper config to suppress changelog overwriting ([0a79445](https://github.com/zeroth/quickstart/commit/0a79445))
* **columns:** Implement custom column definitions ([4671c83](https://github.com/zeroth/quickstart/commit/4671c83))
* **demo:** extracted _demo from [@ubiquits](https://github.com/ubiquits)/core ([da1e75e](https://github.com/zeroth/quickstart/commit/da1e75e))
* **docker:** Implement env and docker-compose configuration to handle running with docker locally ([d44147a](https://github.com/zeroth/quickstart/commit/d44147a))
* **env:** added .env example file ([25f90bc](https://github.com/zeroth/quickstart/commit/25f90bc))
* **home:** Implement a better home screen, seed with more entities ([15443d3](https://github.com/zeroth/quickstart/commit/15443d3))
* **infrastructure:** Implement separate mock, http and db stores as concrete classes for user store. ([1cb2cc2](https://github.com/zeroth/quickstart/commit/1cb2cc2))
* **infrastructure:** refactored to use new toolchain structure ([49fb2e7](https://github.com/zeroth/quickstart/commit/49fb2e7))
* **infrastructure:** tweaked implementation for testing ([a6a3ed6](https://github.com/zeroth/quickstart/commit/a6a3ed6))
* **middleware:** Refactor with ResourceController and middleware example ([01f23db](https://github.com/zeroth/quickstart/commit/01f23db))
* **model:** Implement demo for  model creation ([87366fd](https://github.com/zeroth/quickstart/commit/87366fd))
* **npm:** fixed package naming ([86f2117](https://github.com/zeroth/quickstart/commit/86f2117))
* **orm:** Remove sequelize, install typeorm ([f2e1cb5](https://github.com/zeroth/quickstart/commit/f2e1cb5))
* **orm:** Update to typeorm pattern, move db initializer to seeder ([601d9e5](https://github.com/zeroth/quickstart/commit/601d9e5))
* **registry:** Implement registry pattern from upstream ([8d0b101](https://github.com/zeroth/quickstart/commit/8d0b101))
* **services:** Implement [@service](https://github.com/service) decorator and upgrade to angular rc.4 ([3be65e5](https://github.com/zeroth/quickstart/commit/3be65e5))
* **stores:** Implement full e2e test of model retrieval with implementations of database and http stores ([8a8d4f4](https://github.com/zeroth/quickstart/commit/8a8d4f4))
* **ts 2.0:** Updates to tsconfig to use the new build pattern ([3594eec](https://github.com/zeroth/quickstart/commit/3594eec))



