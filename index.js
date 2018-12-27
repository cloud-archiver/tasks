module.exports = class Tasks {
  static name () {
    return 'tasks'
  }

  constructor ({ cache, logger, config, program }) {
    this.cache = cache
    this.logger = logger
    this.config = config
    this.program = program

    program 
      .command('task:run')
      .arguments('<name>')      
      .action(this.run.bind(this))
  }

  run (name) {
    return this.config.tasks[name].map(task => {
      this.logger.log('Executing', task)
      return this.program.parse(['', '', ...task.split(' ')])
    })
  }
}
