namespace ReactCore.Domain
{
    public class OperationResult
    {
        public bool Success { get; set; }
        public string Message { get; set; }

        public OperationResult()
        {
            Success = true;
        }
    }

    public class OperationResult<TResult> : OperationResult
    {
        public TResult Object { get; set; }

        public OperationResult(TResult result = default(TResult))
        {
            Object = result;
        }
    }
}
