namespace app.Controllers {
  export class HomeController {
    public movies;
    constructor(
    private movieService: app.Services.MovieService
    ) {
      this.movies = movieService.list();

    }
  }

  export class AddMovieController {
    public movie;
    constructor(
      private movieService: app.Services.MovieService,
      private $state: ng.ui.IStateService
    ) {
    }
    public save() {
      this.movieService.save(this.movie).then(() => {
        this.$state.go("Home");

      })
    }
  }
  angular.module('app').controller('HomeController', HomeController);
}
