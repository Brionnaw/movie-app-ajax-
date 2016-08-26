namespace app.Services {
    export class MovieService {
      public MovieResource;
      constructor(
        private $resource: ng.resource.IResourceService     // this line is doing get - put -- post //
      ) {
        this.MovieResource = $resource('/api/movies/:id') // endpoint
      }
      public list() {
          return this.MovieResource.query();  // run a get endpoint
      }
      public save(movie) {
        return this.MovieResource.save(movie).$promise;
    }
  }
    angular.module('app').service('movieService', MovieService);
}
