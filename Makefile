# This Make file will help you switch between different Lessons

# Variables
MAINFILE = ~/Desktop/vue-basics/src/App.vue

# Targets
dev:
	@npm run dev

comment-out:
	@chmod +x ./scripts/comment_out.sh
	@./scripts/comment_out.sh $(MAINFILE)

lesson-one:
	@chmod +x ./scripts/lesson_one.sh
	@./scripts/lesson_one.sh $(MAINFILE)
