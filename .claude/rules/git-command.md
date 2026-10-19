# Git 단축 명령

프롬프트가 아래 키워드로 시작하면 그 작업을 수행한다. 키워드 뒤에 다른 말이 붙어도 키워드가 우선이다.

| 명령 | 동작 |
|------|------|
| `git-cm-m` | 커밋 메시지만 작성한다. 커밋하지 않는다 |
| `git-cm` | 변경 전체를 커밋 하나로 묶어 커밋한다 |
| `git-cm-di` | 작업별로 나눠서 여러 커밋으로 커밋한다 |
| `git-ps` | 현재 브랜치를 origin 에 push 한다 |
| `git-fc` | `git fetch --all --prune` |
| `git-pl` | 현재 브랜치를 원격에서 pull 한다 |
| `git-merge-<branch>` | 현재 브랜치에 `<branch>` 를 merge 한다 |
| `git-st` | `git stash` |
| `git-st-p` | `git stash pop` |

## 커밋 메시지 형식

제목은 영어, 본문은 영어 불릿을 먼저 쓰고 그 아래에 한글 불릿을 쓴다. 같은 내용을 두 번 적는 것이므로 불릿 수를 맞춘다.

```
<type>: <영어 제목>

- <English bullet>
- <English bullet>
- <한글 불릿>
- <한글 불릿>
```

예시

```
refactor: company apply atomic pattern

- Move markup from src/app into components as molecules, organisms and templates
- Replace delivered CSS files with Tailwind styles.ts
- company 내부 메뉴들 아토믹 디자인 패턴 적용
- 납품 CSS 파일을 Tailwind styles.ts 로 전환
```

규칙

- `<type>` 은 Conventional Commits 를 쓴다. `feat` `fix` `refactor` `chore` `docs` `test` `style` `perf`
- 제목은 명령형 현재형으로 쓰고 마침표를 찍지 않는다
- 불릿은 **무엇을 했는지**만 적는다. 왜 그랬는지에 대한 설명, 검증 과정, 수치는 넣지 않는다
- 한 줄짜리 변경이면 불릿 없이 제목만 쓴다
- **`Co-Authored-By` 를 비롯한 trailer 를 붙이지 않는다**

## 커밋 범위

기본은 `git-cm` 이다. 성격이 다른 변경이 섞여 있어도 **묻지 말고 커밋 하나로** 묶는다. 불릿에 각 변경을 적어서 드러낸다.

나눠야 할 때만 `git-cm-di` 를 쓴다. 이때는 `git add <path>` 로 스테이징을 갈라 순서대로 커밋하고, 커밋하기 전에 어떻게 나눌지 먼저 보고한다.

## push

`git-ps` 는 push 허락으로 본다. 따로 확인받지 않는다.

- `main` 과 `develop` 에는 직접 push 하지 않는다. 현재 브랜치가 둘 중 하나면 push 하지 말고 알린다
- 원격에 upstream 이 없으면 `git push -u origin <branch>` 로 붙인다
- `--force` 는 쓰지 않는다. 필요하면 `--force-with-lease` 를 쓰되 먼저 확인받는다
- `--no-verify` 는 쓰지 않는다

## merge

`git-merge-<branch>` 는 현재 브랜치에 `<branch>` 를 merge 한다.

- merge 전에 작업 트리가 깨끗한지 확인한다. 변경이 남아 있으면 stash 할지 묻는다
- 충돌이 나면 임의로 해소하지 말고 충돌 파일을 보고한다
